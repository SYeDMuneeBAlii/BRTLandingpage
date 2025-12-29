import { STATUS_COLORS } from '@/lib/constants/dashboard';
import type { StatusType } from '@/types/dashboard';

export function getStatusColor(status: StatusType): string {
  return STATUS_COLORS[status] || 'bg-gray-100 text-gray-800';
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

