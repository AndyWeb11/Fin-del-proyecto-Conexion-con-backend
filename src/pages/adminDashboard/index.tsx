'use client';
import React from 'react';
import { mockAnalytics, mockOrders, mockProducts, mockUsers } from '@/lib/mockData';
import KPICard from '@/components/adminDash/KPICards';
import Charts from '@/components/adminDash/Charts';
import RecentActivity from '@/components/adminDash/RecentActiviti';
import { DollarSign, Users, ShoppingCart, Package } from 'lucide-react';
import DashboardLayout from './layout';
import ProtectedRoute from '@/components/protectedRoute';

const DashboardPage: React.FC = () => {
  const totalUsers = Object.keys(mockUsers).length;
  const totalProducts = mockProducts.length;
  const totalOrders = mockOrders.length;
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.total, 0);

  return (
    <ProtectedRoute>
        <DashboardLayout>
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard General</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard title="Total de Ventas" value={`$${totalRevenue.toLocaleString()}`} change='+12.5%' trend='up' icon={<DollarSign size={32} />} color='text-green-600' />
                <KPICard title="Total de Pedidos" value={totalOrders.toLocaleString()} change='-8%' trend='down' icon={<ShoppingCart size={32} />} color='text-blue-600' />
                <KPICard title="Total de Usuarios" value={totalUsers.toLocaleString()} change='+12.1%' trend='up' icon={<Users size={32} />} color='text-purple-600' />
                <KPICard title="Total de Productos" value={totalProducts.toLocaleString()} change='-7.3%' trend='down' icon={<Package size={32} />} color='text-orange-600' />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                <Charts revenueData={mockAnalytics.revenue} usersData={mockAnalytics.users} />
                </div>
                <div className="lg:col-span-1">
                <RecentActivity orders={mockOrders} />
                </div>
            </div>
            </div>
        </DashboardLayout>
    </ProtectedRoute>
  );
};

export default DashboardPage;