import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: 'primary' | 'secondary' | 'glass';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  size = 'md',
  style = 'primary',
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-lg font-medium transition-colors text-white cursor-pointer',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        style === 'primary' && 'bg-amber-500 hover:bg-amber-600',
        // style === 'secondary' && 'bg-amber-500 hover:bg-amber-600',
        style === 'glass' &&
          'bg-neutral-400/15 hover:bg-amber-400/20 transition-colors shadow-lg border-[1px] border-amber-500/60 backdrop-blur-sm',
        size === 'sm' && 'text-sm px-4 py-2 text-center',
        size === 'md' && 'text-sm px-5 py-2.5 text-center',
        size === 'lg' && 'text-sm px-7 py-2.5 text-center',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
