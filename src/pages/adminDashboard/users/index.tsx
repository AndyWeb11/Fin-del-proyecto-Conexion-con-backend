'use client';
import React, { useEffect } from 'react';
import UserList from '@/components/adminDash/users/UserList';
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/navigation';
import DashboardLayout from '../layout';

const UsersPage: React.FC = () => {
  const { hasPermission } = usePermissions();
  const router = useRouter();

  useEffect(() => {
    if (!hasPermission('manage_users')) {
      router.push('/adminDashboard');
    }
  }, [hasPermission, router]);

  if (!hasPermission('manage_users')) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Usuarios</h1>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            + Agregar Usuario
        </button>
      </div>
      <UserList />
    </div>
  </DashboardLayout>
  );
};

export default UsersPage;