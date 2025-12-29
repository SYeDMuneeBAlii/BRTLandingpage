import { getStatusColor } from '@/lib/utils/status';
import type { StatusType } from '@/types/dashboard';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(status)} ${className}`}
      role="status"
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
}

