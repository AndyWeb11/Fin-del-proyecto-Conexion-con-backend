'use client';
import React, { useState } from 'react';
import { mockUsers } from '@/lib/mockData';
import usePermissions from '@/hooks/usePermissions';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  permissions: string[];
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>(Object.values(mockUsers));
  const { hasPermission } = usePermissions();

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'manager': return 'bg-blue-100 text-blue-800';
      case 'user': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar a este usuario?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Lista de Usuarios</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Permisos
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-2xl">{user.avatar}</div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.permissions.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {hasPermission('manage_users') && (
                    <>
                      <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Editar</a>
                      <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;