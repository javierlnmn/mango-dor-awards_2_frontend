import { cn } from '@/lib/cn';

interface CardProps {
  containerClassName?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

const Card = ({
  containerClassName,
  contentClassName,
  children,
}: CardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 backdrop-blur-[1px] p-4 rounded-xl bg-neutral-400/15 shadow-lg border-[1px] border-neutral-500/60',
        containerClassName
      )}
    >
      <div className={cn('flex flex-col gap-2', contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Card;
