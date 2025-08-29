'use client';
import React, { useEffect } from 'react';
import Charts from '@/components/adminDash/Charts';
import { mockAnalytics } from '@/lib/mockData';
import usePermissions from '@/hooks/usePermissions';
import { useRouter } from 'next/navigation';

const AnalyticsPage: React.FC = () => {
  const { hasPermission } = usePermissions();
  const router = useRouter();

  useEffect(() => {
    if (!hasPermission('view_analytics')) {
      router.push('/adminDashboard');
    }
  }, [hasPermission, router]);

  if (!hasPermission('view_analytics')) {
    return null;
    }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Analíticas</h1>
      <Charts revenueData={mockAnalytics.revenue} usersData={mockAnalytics.users} />
    </div>
  );
};

export default AnalyticsPage;