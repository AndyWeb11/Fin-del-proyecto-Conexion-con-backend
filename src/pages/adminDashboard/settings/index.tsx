'use client';
import React, { useEffect } from 'react';
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../layout';

const SettingsPage: React.FC = () => {
  const { hasPermission } = usePermissions();
  const router = useRouter();

  useEffect(() => {
    if (!hasPermission('manage_users')) { // Asumiendo que la configuración es para administradores
      router.push('/adminDashboard');
    }
  }, [hasPermission, router]);

  if (!hasPermission('manage_users')) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Configuración</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <p className="text-lg text-gray-600">
            Esta es la página de configuración.
        </p>
      </div>
    </div>
  </DashboardLayout>
  );
};

export default SettingsPage;