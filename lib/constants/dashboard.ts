import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Settings,
  FileText,
  BarChart3,
  Mail,
  Calendar,
  Package,
  DollarSign,
  type LucideIcon,
} from 'lucide-react';
import type { MenuItem } from '@/types/dashboard';

export const MENU_ITEMS: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Users', href: '/dashboard/users' },
  { icon: ShoppingCart, label: 'Orders', href: '/dashboard/orders' },
  { icon: Package, label: 'Products', href: '/dashboard/products' },
  { icon: DollarSign, label: 'Revenue', href: '/dashboard/revenue' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: FileText, label: 'Reports', href: '/dashboard/reports' },
  { icon: Mail, label: 'Messages', href: '/dashboard/messages' },
  { icon: Calendar, label: 'Calendar', href: '/dashboard/calendar' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export const USER_ROLES = ['Admin', 'User', 'Moderator'] as const;
export const USER_STATUSES = ['Active', 'Inactive', 'Pending'] as const;
export const ORDER_STATUSES = ['Completed', 'Pending', 'Processing', 'Shipped', 'Cancelled'] as const;
export const PRODUCT_STATUSES = ['In Stock', 'Out of Stock', 'Low Stock'] as const;

export const STATUS_COLORS = {
  Active: 'bg-green-100 text-green-800',
  Inactive: 'bg-red-100 text-red-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Completed: 'bg-green-100 text-green-800',
  Processing: 'bg-blue-100 text-blue-800',
  Shipped: 'bg-purple-100 text-purple-800',
  Cancelled: 'bg-red-100 text-red-800',
  'In Stock': 'bg-green-100 text-green-800',
  'Out of Stock': 'bg-red-100 text-red-800',
  'Low Stock': 'bg-yellow-100 text-yellow-800',
} as const;

