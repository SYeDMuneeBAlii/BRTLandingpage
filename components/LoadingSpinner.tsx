'use client';

import { motion } from 'motion/react';

interface LoadingSpinnerProps {
  size?: number;
  className?: string;
}

export default function LoadingSpinner({ size = 40, className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#0086b3',
            borderRightColor: '#33a3c4',
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: '#33a3c4',
            borderLeftColor: '#0086b3',
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  );
}

