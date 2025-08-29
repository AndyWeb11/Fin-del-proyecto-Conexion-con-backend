import { User } from '@/types/auth';
// Datos simulados provisionales antes de consumir los endpoints reales
export const mockUsers: Record<string, User> = {
  'admin@test.com': {
    id: 1,
    name: 'Admin Usuario',
    email: 'admin@test.com',
    role: 'admin',
    avatar: '🧑‍💼',
    permissions: ['read', 'write', 'delete', 'manage_users', 'manage_products', 'manage_orders', 'view_analytics']
  },
  'manager@test.com': {
    id: 2,
    name: 'Manager Usuario',
    email: 'manager@test.com',
    role: 'manager',
    avatar: '👩‍💼',
    permissions: ['read', 'write', 'manage_products', 'manage_orders', 'view_analytics']
  },
  'user@test.com': {
    id: 3,
    name: 'Usuario Básico',
    email: 'user@test.com',
    role: 'user',
    avatar: '👤',
    permissions: ['read']
  }
};

export const mockProducts = [
  { id: 1, name: 'iPhone 14 Pro', brand: 'Apple', sku: 'APL-IP14P-128', price: 999, stock: 45, category: 'Smartphones', status: 'active', image: '📱' },
  { id: 2, name: 'Samsung Galaxy S23', brand: 'Samsung', sku: 'SAM-GS23-256', price: 899, stock: 32, category: 'Smartphones', status: 'active', image: '📱' },
  { id: 3, name: 'MacBook Air M2', brand: 'Apple', sku: 'APL-MBA-M2', price: 1199, stock: 18, category: 'Laptops', status: 'active', image: '💻' },
  { id: 4, name: 'Dell XPS 13', brand: 'Dell', sku: 'DEL-XPS13', price: 1099, stock: 12, category: 'Laptops', status: 'inactive', image: '💻' },
  { id: 5, name: 'Sony WH-1000XM4', brand: 'Sony', sku: 'SON-WH1000', price: 349, stock: 67, category: 'Audio', status: 'active', image: '🎧' }
];

export const mockOrders = [
  { id: 1001, customer: 'Juan Pérez', email: 'juan@email.com', total: 1999, status: 'Completado', date: '2025-08-10', items: 2, payment: 'credit_card', location: 'CDMX' },
  { id: 1002, customer: 'Maria Garcia', email: 'maria@email.com', total: 899, status: 'Pendiente', date: '2025-08-11', items: 1, payment: 'paypal', location: 'Guadalajara' },
  { id: 1003, customer: 'Carlos Lopez', email: 'carlos@email.com', total: 349, status: 'Enviado', date: '2025-08-12', items: 1, payment: 'transfer', location: 'Monterrey' },
  { id: 1004, customer: 'Ana Martinez', email: 'ana@email.com', total: 2198, status: 'Procesando', date: '2025-08-13', items: 3, payment: 'credit_card', location: 'Puebla' }
];

export const mockAnalytics = {
  revenue: [
    { month: 'Ene', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Abr', amount: 61000 },
    { month: 'May', amount: 55000 },
    { month: 'Jun', amount: 67000 },
    { month: 'Jul', amount: 73000 },
    { month: 'Ago', amount: 71000 }
  ],
  users: [
    { month: 'Ene', users: 1200 },
    { month: 'Feb', users: 1450 },
    { month: 'Mar', users: 1320 },
    { month: 'Abr', users: 1680 },
    { month: 'May', users: 1590 },
    { month: 'Jun', users: 1820 },
    { month: 'Jul', users: 1950 },
    { month: 'Ago', users: 2100 }
  ]
};

export const mockLocations = [
  { city: 'San Martin Texmelucan', orders: 156, revenue: 145000, lat: 19.4326, lng: -99.1332 },
  { city: 'Coronango', orders: 89, revenue: 89000, lat: 20.6597, lng: -103.3496 },
  { city: 'Huejotzingo', orders: 67, revenue: 76000, lat: 25.6866, lng: -100.3161 },
  { city: 'Cholula', orders: 45, revenue: 52000, lat: 19.0414, lng: -98.2063 },
  { city: 'Cuautlancingo', orders: 34, revenue: 41000, lat: 32.5149, lng: -117.0382 }
];