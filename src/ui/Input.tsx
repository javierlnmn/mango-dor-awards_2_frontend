import { cn } from '@/lib/cn';

interface InputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  label?: string;
  placeholder?: string;
  error?: string;
  type?: string;
  className?: string;
}

const Input = ({
  name,
  value,
  onChange,
  disabled = false,
  label,
  error,
  type,
  className,
  placeholder,
}: InputProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="block text-sm font-medium text-white/90 mb-2">
          {label}
        </label>
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-3 rounded-lg',
          'bg-white/10 backdrop-blur-md border border-white/20',
          'placeholder-white/50',
          'focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-orange-400/50',
          'transition-all duration-200',
          'hover:bg-white/15 hover:border-white/30',
          error &&
            'border-red-400/50 focus:ring-red-400/50 focus:border-red-400/50',
          className
        )}
      />
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
