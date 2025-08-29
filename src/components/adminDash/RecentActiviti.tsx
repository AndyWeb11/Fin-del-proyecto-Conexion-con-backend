import React from 'react';

interface Order {
  id: number;
  customer: string;
  total: number;
  status: string;
  date: string;
}

interface RecentActivityProps {
  orders: Order[];
}

const RecentActivity: React.FC<RecentActivityProps> = ({ orders }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completado': return 'bg-green-100 text-green-800';
      case 'Pendiente': return 'bg-yellow-100 text-yellow-800';
      case 'Enviado': return 'bg-blue-100 text-blue-800';
      case 'Procesando': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Actividad Reciente</h2>
      <div className="space-y-4">
        {orders.slice(0, 5).map(order => (
          <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
            <div>
              <p className="font-medium text-gray-800">Pedido #{order.id}</p>
              <p className="text-sm text-gray-600">{order.customer}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-gray-700">${order.total}</p>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;