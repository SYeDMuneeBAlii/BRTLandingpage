import { ArrowUpRight, ArrowDownRight, type LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  label,
  value,
  change,
  trend,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="rounded-xl glass-card-gold p-6 transition-all hover:scale-105 relative">
      <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-linear-to-br ${color}`} style={{
                  background: color.includes('from-') && color.includes('to-') 
                    ? undefined 
                    : color.startsWith('#') 
                    ? `linear-gradient(to bottom right, ${color}, ${color}dd)` 
                    : color
                }}>
                  <Icon className="text-white" size={24} aria-hidden="true" />
                </div>
        <div
          className={`flex items-center space-x-1 text-sm font-semibold ${
            trend === 'up' ? 'text-emerald-500' : 'text-rose-500'
          }`}
          aria-label={`Trend: ${trend}, Change: ${change}`}
        >
          {trend === 'up' ? (
            <ArrowUpRight size={16} aria-hidden="true" />
          ) : (
            <ArrowDownRight size={16} aria-hidden="true" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

