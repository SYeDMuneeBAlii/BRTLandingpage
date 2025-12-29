import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
}

export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Processing' | 'Shipped' | 'Cancelled';
  date: string;
  payment?: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'In Stock' | 'Out of Stock' | 'Low Stock';
  sku: string;
}

export interface Activity {
  type: string;
  message: string;
  time: string;
  icon: LucideIcon;
}

export interface RevenueDataPoint {
  name: string;
  revenue: number;
  profit: number;
  expenses?: number;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface Message {
  id: number;
  from: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  starred: boolean;
}

export interface CalendarEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'event' | 'call' | 'workshop';
}

export interface Report {
  id: number;
  name: string;
  type: string;
  date: string;
  size: string;
  status: 'Ready' | 'Generating' | 'Failed';
}

export interface Settings {
  name: string;
  email: string;
  notifications: boolean;
  emailNotifications: boolean;
  pushNotifications: boolean;
  language: string;
  timezone: string;
  currency: string;
}

export type StatusType = User['status'] | Order['status'] | Product['status'];
export type TrendType = 'up' | 'down';

