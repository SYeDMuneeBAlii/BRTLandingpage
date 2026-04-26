'use client';

import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from './ThemeProvider';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CursorFollower from '@/components/cursor/CursorFollower';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, wheelMultiplier: 0.8, smoothWheel: true }}>
      <ThemeProvider>
        <ScrollProgress />
        <CursorFollower />
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
}
