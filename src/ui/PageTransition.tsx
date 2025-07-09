import type { ComponentType, ReactNode } from 'react';
import { motion } from 'framer-motion'; // fix: make sure it's 'framer-motion', not 'motion/react'

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -100,
  },
};

const transition = {
  type: 'spring' as const,
  damping: 20,
  stiffness: 100,
  duration: 0.6,
};

export const withPageTransition = <T extends object>(
  Component: ComponentType<T>
) => {
  const WrappedComponent = (props: T) => {
    return (
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={transition}
          className="w-full h-full overflow-y-auto"
        >
          <Component {...props} />
        </motion.div>
      </div>
    );
  };
  return WrappedComponent;
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={transition}
        className="w-full h-full overflow-y-auto"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
