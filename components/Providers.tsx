'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from "./ThemeProvider";
import ScrollProgress from "./ScrollProgress";

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
      {children}
    </ThemeProvider>
  );
}

