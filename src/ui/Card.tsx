'use client';

import { useRef, useState } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      style={
        {
          '--x': `${position.x}px`,
          '--y': `${position.y}px`,
        } as React.CSSProperties
      }
      className={cn(
        'relative group overflow-hidden rounded-xl p-4 bg-neutral-400/15 backdrop-blur-[1px] shadow-lg',
        containerClassName
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition duration-300 group-hover:opacity-100 opacity-0"
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(251, 191, 36, 0.15), transparent 80%)`,
          border: '2px solid transparent',
          borderImage: `radial-gradient(circle at var(--x) var(--y), rgba(251, 191, 36, 0.8), transparent 60%) 1`,
          borderRadius: 'inherit',
        }}
      />
      <div className="absolute inset-0 z-0 rounded-2xl border border-transparent group-hover:border-amber-800/20 group-hover:shadow-[0_0_8px_2px_rgba(251,191,36,0.3)] transition-all duration-300" />
      <div
        className={cn('relative z-10 flex flex-col gap-2', contentClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
