'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './ThemeProvider';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CursorFollower from '@/components/cursor/CursorFollower';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.8,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <CursorFollower />
      {children}
    </ThemeProvider>
  );
}

