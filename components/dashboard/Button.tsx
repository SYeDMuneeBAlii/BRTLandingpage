import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: LucideIcon;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/20',
    outline: 'border border-white/10 text-white hover:bg-white/5',
    ghost: 'text-slate-400 hover:bg-white/5 hover:text-white',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}

