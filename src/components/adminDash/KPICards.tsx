import { LucideIcon } from 'lucide-react';
import React, { ReactElement } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
}


const KPICard: React.FC<KPICardProps> = ({ title, value, change,trend, icon, color }) => {
  return (
     <div> 
        <div className="bg-white rounded-xl shadow-sm border p-6"> 
          <div className="flex items-center justify-between"> 
            <div> 
              <p className="text-sm font-medium text-gray-600 mb-1">{title}</p> 
              <p className="text-2xl font-bold text-gray-800">{value}</p> 
              <div className={`flex items-center mt-2 ${trend === 'up' ? 'text-green-600' : 'text-red-600' }`}> 
              {trend === 'up' ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />} 
                <span className="text-sm font-medium">{change}</span> 
              </div> 
            </div> 
            <div className={`p-3 rounded-lg bg-gray-100`}> 
              <div className={`h-6 w-6 ${color}`}>{icon}</div> 
            </div> 
          </div> 
        </div> 
    </div> 
  );
};

export default KPICard;

{/* <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-4">
      <div className="text-4xl">{icon}</div>
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div> */}