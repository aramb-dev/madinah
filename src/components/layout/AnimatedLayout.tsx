'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -200, // Slide in from the left
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200, // Slide out to the right
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Key helps AnimatePresence detect when the page changes
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ width: '100%' }} // Ensure the motion div takes full width
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedLayout;