import { AuthProvider } from "@refinedev/core";
//import { User } from "../types/auth";

export const authProvider: AuthProvider = {
  login: async (params) => {
    // Si params es undefined, evita error
    const { email, password } = params ?? {};

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true, redirectTo: "/Dashboard" };
    }

    return { 
      success: false, 
      error: { 
        name: "LoginError", 
        message: "Login failed" 
      } 
    };
  },

  logout: async () => {
    localStorage.removeItem("user");
    return { success: true, redirectTo: "/login" };
  },

  check: async () => {
    const userString = localStorage.getItem("user");
    if (!userString) {
      return { authenticated: false, redirectTo: "/login" };
    }
    
    try {
      const parsedUser = JSON.parse(userString);
      
      if (parsedUser && parsedUser.id) {
        return { authenticated: true };
      }
    } catch {
      localStorage.removeItem("user");
    }
    
    return { authenticated: false, redirectTo: "/login" };
  },

  getIdentity: async () => {
  const userString = localStorage.getItem("user");
  if (userString) {
    try {
      const parsedUser = JSON.parse(userString);
      // Asegúrate de que el usuario tenga la estructura correcta
      return {
        id: parsedUser.id,
        name: parsedUser.name,
        email: parsedUser.email,
        role: parsedUser.role,
        permissions: parsedUser.permissions || []
      };
    } catch {
      localStorage.removeItem("user");
      return null;
    }
  }
  return null; 
  },


  onError: async (error) => {
    console.error(error);
    return { error };
  },
};