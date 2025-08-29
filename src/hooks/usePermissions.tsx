import { useAuth } from '@/contexts/AuthContext';

// Hook personalizado para permisos de usuario dentro del administrador del usuario
const usePermissions = () => {
  const { user, isAuthenticated } = useAuth();

  const hasPermission = (permission: string): boolean => {
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission);
  };

  return {
    hasPermission,
    user,
    isAuthenticated,
    isLoading: isAuthenticated === null
  };
};

export default usePermissions;

// import { useGetIdentity } from "@refinedev/core";

// export const usePermissions = () => {
//   const { data: user, isLoading } = useGetIdentity<{
//     UserId: number;
//     username: string;
//     email: string;
//     roles: string[];
//     permissions: string[];
//     exp: number;
//   }>();

//   const hasPermission = (permission: string): boolean => {
//     if (isLoading || !user) return false;
//     return user.permissions?.includes(permission) || false;
//   };

//   return {
//     hasPermission,
//     user,
//     isLoading
//   };
// };

