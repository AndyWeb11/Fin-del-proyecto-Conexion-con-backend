import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  month: string;
  amount?: number;
  users?: number;
}

interface ChartsProps {
  revenueData: ChartData[];
  usersData: ChartData[];
}



const Charts: React.FC<ChartsProps> = ({ revenueData, usersData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Ventas y Usuarios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Ingresos Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#8884d8" name="Ingresos" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Usuarios Registrados</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={usersData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#82ca9d" name="Usuarios" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;