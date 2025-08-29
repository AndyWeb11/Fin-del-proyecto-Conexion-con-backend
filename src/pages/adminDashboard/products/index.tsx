'use client';
import ProductList from '@/components/adminDash/products/ProductList';
import DashboardLayout from '../layout';
import React, { useEffect } from 'react';
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/navigation';

const ProductsPage: React.FC = () => {
  const { hasPermission } = usePermissions();
  const router = useRouter();

  useEffect(() => {
    if (!hasPermission('view_products')) {
      router.push('/adminDashboard');
    }
  }, [hasPermission, router]);

  if (!hasPermission('view_products')) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Productos</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            + Agregar Producto
        </button>
      </div>
      <ProductList />
    </div>
  </DashboardLayout>
  );
};

export default ProductsPage;