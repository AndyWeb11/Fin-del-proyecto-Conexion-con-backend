'use client';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
//import { usePermissions } from '@/hooks/usePermissions';
//Se piensa agregar búsqueda de permisos

const Header: React.FC = () => {
  const { user, onLogout } = useAuth();
  const router = useRouter();
  //const { hasPermission } = usePermissions();

  const handleLogout = async () => {
    if (onLogout) {
      await onLogout();
      router.push('/login');
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard
        </h1>
        {user && <p className="text-gray-600">Bienvenido, {user.name}!</p>}
      </div>
      <div className="flex items-center space-x-4">
        {/* {hasPermission('read') && (
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              🔍
            </span>
          </div>
        )} */}
        {user && (
          <div className="flex items-center space-x-2">
            <span className="text-xl">{user.avatar}</span>
            <span className="font-medium text-gray-700">{user.email}</span>
          </div>
        )}
      </div>
      <button
        onClick={handleLogout}
        className="ml-4 p-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        🚪
      </button>
    </header>
  );
};

export default Header;