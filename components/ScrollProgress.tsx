'use client';

import { useScroll, useTransform, motion } from 'motion/react';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
      style={{
        scaleX,
        opacity,
      }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          background: 'linear-gradient(to right, var(--primary), var(--secondary), var(--primary))',
          boxShadow: '0 0 10px var(--primary-dark), 0 0 20px var(--secondary-dark)',
        }}
      />
    </motion.div>
  );
}

export default ScrollProgress;
