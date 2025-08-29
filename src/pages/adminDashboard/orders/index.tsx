'use client';
import React from 'react';
import OrderList from '@/components/adminDash/orders/OrderList';
import DashboardLayout from '../layout';

const OrdersPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pedidos</h1>
        <OrderList />
      </div>
    </DashboardLayout>
  );
};  

export default OrdersPage;