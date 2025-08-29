'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import  usePermissions  from '@/hooks/usePermissions';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Home, Package, ShoppingCart, Users, BarChart3, 
  MapPin, Settings, LogOut, IdCard
} from 'lucide-react';

// Navegación principal
const navigation = [
  { name: 'Dashboard', href: '/Dashboard', icon: Home, permission: 'read' },
  { name: 'Productos', href: '/Dashboard/Products', icon: Package, permission: 'manage_products' },
  { name: 'Pedidos', href: '/Dashboard/Orders', icon: ShoppingCart, permission: 'manage_orders' },
  { name: 'Usuarios', href: '/Dashboard/Users', icon: Users, permission: 'manage_users' },
  { name: 'Analíticas', href: '/Dashboard/Analytics', icon: BarChart3, permission: 'view_analytics' },
  { name: 'Ubicaciones', href: '/Dashboard/Locations', icon: MapPin, permission: 'view_analytics' },
  { name: 'Membresias', href: '/Dashboard/Memberships', icon: IdCard, permission: 'view_analytics' },
  { name: 'Configuración', href: '/Dashboard/Settings', icon: Settings, permission: 'manage_users' },
];

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const { hasPermission, user, isLoading } = usePermissions();
  const { onLogout } = useAuth();

  const handleLogout = async () => {
    if (onLogout) {
      await onLogout();
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen p-4 bg-gray-800 text-white w-64">
        <div className="animate-pulse">Cargando...</div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-screen p-4 bg-gray-800 text-white transition-all duration-300 ${open ? 'w-64' : 'w-20'}`}>
      <div className="flex items-center justify-between h-16 border-b border-gray-700">
        {open && <span className="text-xl font-bold">Admin Panel</span>}
        <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-700">
          {open ? '⬅️' : '➡️'}
        </button>
      </div>

      {/* Info del usuario */}
      {open && user && (
        <div className="mt-4 p-3 bg-gray-700 rounded-lg">
          <div className="text-sm font-medium">{user.name}</div>
          <div className="text-xs text-gray-300">{user.role}</div>
        </div>
      )}

      <nav className="mt-8 flex-1">
        <ul className="space-y-2">
          {navigation
            .filter(item => hasPermission(item.permission))
            .map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors">
                  <item.icon className={`text-2xl ${open ? 'mr-3' : 'mx-auto'}`} />
                  {open && <span className="text-sm font-medium">{item.name}</span>}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <button 
          onClick={handleLogout}
          className={`w-full flex items-center p-2 rounded-md hover:bg-gray-700 transition-colors ${!open && 'justify-center'}`}
        >
          <LogOut className={`text-2xl ${open ? 'mr-3' : 'mx-auto'}`} />
          {open && <span className="text-sm font-medium">Cerrar sesión</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;