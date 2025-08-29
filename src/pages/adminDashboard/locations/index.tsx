'use client';
import React, {useEffect} from 'react';
import { mockLocations } from '@/lib/mockData';
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MapPin } from 'lucide-react';
import DashboardLayout from '../layout';

const LocationsPage: React.FC = () => {
  const { hasPermission } = usePermissions();
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    if (!hasPermission('view_analytics')) {
      router.push('/adminDashboard');
    }
  }, [hasPermission, router]);

  if (!hasPermission('view_analytics')) {
    return null;
  }

  return (
    <DashboardLayout>
        <div className='space-y-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Ubicaciones</h1>
        <div className='bg-white rounded-xl shadow-sm border p-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
            Distibución geográfica de pedidos Puebla
            </h3>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 min-h-96 flex items-center justify-center relative">
            <div className='text-center'>
                <MapPin className='h-16 w-16 text-blue-600 mx-auto mb-4' />
                <p className="text-lg font-medium text-gray-800">Mapa Interactivo</p>
                <p className="text-gray-600">Visualización de pedidos por ubicación</p>
            </div>

            {/* Puntos de ubicación simulados */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse" title="Cuauclancingo"></div>
            <div className="absolute top-8 right-12 w-2 h-2 bg-blue-500 rounded-full animate-pulse" title="Coronango"></div>
            <div className="absolute bottom-12 left-8 w-2 h-2 bg-green-500 rounded-full animate-pulse" title="Huejotzingo"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 bg-purple-500 rounded-full animate-pulse" title="San Martin Texmelucan"></div>
            </div>
        </div>
        <div className="container mx-auto">
            
            <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Pedidos por municipio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockLocations.map((location, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-800">{location.city}</h3>
                    <p className="text-sm text-gray-600">Pedidos: {location.orders}</p>
                    <p className="text-sm text-gray-600">Ingresos: ${location.revenue.toLocaleString()}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </DashboardLayout>
  );
};

export default LocationsPage;