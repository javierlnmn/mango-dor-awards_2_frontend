import { motion } from 'motion/react';

type SpotlightProps = {
  gradientFirstClass?: string;
  gradientSecondClass?: string;
  gradientThirdClass?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirstClass = 'bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,_hsla(210,100%,85%,.1)_0,_hsla(210,100%,55%,.02)_50%,_hsla(210,100%,45%,0)_80%)]',
  gradientSecondClass = 'bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(210,100%,85%,.08)_0,_hsla(210,100%,55%,.02)_80%,_transparent_100%)]',
  gradientThirdClass = 'bg-[radial-gradient(50%_50%_at_50%_50%,_hsla(210,100%,85%,.06)_0,_hsla(210,100%,45%,.02)_80%,_transparent_100%)]',
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none overflow-hidden absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 ${gradientFirstClass}`}
        />
        <div
          style={{
            transform: 'rotate(-45deg) translate(5%, -50%)',
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left ${gradientSecondClass}`}
        />
        <div
          style={{
            transform: 'rotate(-45deg) translate(-180%, -70%)',
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left ${gradientThirdClass}`}
        />
      </motion.div>
      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 ${gradientFirstClass}`}
        />
        <div
          style={{
            transform: 'rotate(45deg) translate(-5%, -50%)',
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right ${gradientSecondClass}`}
        />
        <div
          style={{
            transform: 'rotate(45deg) translate(180%, -70%)',
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right ${gradientThirdClass}`}
        />
      </motion.div>
    </motion.div>
  );
};
