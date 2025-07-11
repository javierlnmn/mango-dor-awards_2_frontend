import { cn } from '@/lib/cn';
import 'odometer/themes/odometer-theme-default.css';
import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';

interface CountdownProps {
  targetDate: Date;
  className?: string;
  title?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = ({ targetDate, className, title }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ];

  return (
    <div className={cn('text-center', className)}>
      {title && <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map(unit => (
          <div
            key={unit.label}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center transition-all duration-300 hover:bg-white/15 hover:border-amber-400/30"
          >
            <div className="mb-2">
              <div className="odometer-fast">
                <Odometer
                  value={unit.value}
                  format="dd"
                  className={`text-3xl md:text-4xl font-bold text-amber-400 ${className}`}
                />
              </div>
            </div>
            <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide font-medium">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
