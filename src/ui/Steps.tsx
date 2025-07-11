import { cn } from '@/lib/cn';

interface Step {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon?: string;
}

interface StepsProps {
  steps: Step[];
  className?: string;
}

const Steps = ({ steps, className }: StepsProps) => {
  return (
    <div className={cn('relative', className)}>
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;

          return (
            <div key={step.id} className="relative flex items-start group">
              {/* Connector Line */}
              {!isLast && (
                <div
                  className={cn(
                    'absolute left-4 top-8 w-0.5 h-16 transition-colors duration-300',
                    step.status === 'completed'
                      ? 'bg-gradient-to-b from-amber-400 to-amber-500'
                      : 'bg-white/20'
                  )}
                />
              )}

              {/* Step Circle */}
              <div
                className={cn(
                  'relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300',
                  step.status === 'completed' &&
                    'bg-amber-500 border-amber-500 text-black',
                  step.status === 'current' &&
                    'bg-white/10 border-amber-400 text-amber-400',
                  step.status === 'upcoming' &&
                    'bg-white/5 border-white/30 text-white/50'
                )}
              >
                {step.status === 'completed' ? (
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span className="text-sm font-bold">{step.id}</span>
                )}
              </div>

              {/* Step Content */}
              <div className="ml-6 flex-1 min-w-0">
                <div
                  className={cn(
                    'text-lg font-semibold transition-colors duration-300',
                    step.status === 'completed' && 'text-amber-300',
                    step.status === 'current' && 'text-white',
                    step.status === 'upcoming' && 'text-white/60'
                  )}
                >
                  {step.title}
                  {step.icon && <span className="ml-2">{step.icon}</span>}
                </div>
                <p
                  className={cn(
                    'mt-1 text-sm transition-colors duration-300',
                    step.status === 'completed' && 'text-white/80',
                    step.status === 'current' && 'text-white/70',
                    step.status === 'upcoming' && 'text-white/50'
                  )}
                >
                  {step.description}
                </p>
              </div>

              {/* Glow Effect for Current Step */}
              {step.status === 'current' && (
                <div className="absolute -inset-2 bg-amber-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
