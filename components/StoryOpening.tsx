'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { resolvePath } from '@/lib/utils/path';

export default function StoryOpening() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Dynamic Background Elements - Simplified */}
      <div className="absolute inset-0 z-0 opacity-40">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32">
          {/* Text Content - Positioned Left and Optimized Size */}
          <motion.div
            style={{ opacity, scale, y }}
            className="text-center lg:text-left max-w-lg order-2 lg:order-1"
          >
            <motion.div
              className="glass-pill mb-10 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-white font-black text-[9px]">01 // THE THESIS</span>
            </motion.div>

            <motion.h1 
              style={{ y: textY }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Every Great Story <br />
              <span className="text-white/30 italic font-serif lowercase tracking-normal text-3xl sm:text-4xl md:text-5xl">starts with</span> <br />
              <span className="text-primary">Decision</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-medium uppercase tracking-[0.2em]">
                Turning complexity into clarity.
              </p>
              <p className="text-[10px] text-white/60 leading-relaxed font-black uppercase tracking-[0.4em]">
                Analytics reimagined for the modern era.
              </p>
            </motion.div>
          </motion.div>

          {/* Large Hero Logo - Positioned Right and Even Bigger */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 relative group order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] group-hover:bg-primary/20 transition-all duration-1000" />
            <img
              src={resolvePath("/logo.svg")}
              alt="BRT Architects Logo"
              className="relative z-10 h-48 md:h-72 lg:h-[32rem] xl:h-[40rem] w-auto invert brightness-0 contrast-200 drop-shadow-[0_0_50px_rgba(0,242,255,0.3)]"
            />
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        aria-label="Scroll to next section"
      >
        <span className="text-slate-500 font-bold tracking-widest text-[10px] uppercase group-hover:text-primary transition-colors">
          Scroll to explore
        </span>
        <ChevronDown className="text-slate-500 group-hover:text-primary transition-colors" size={24} />
      </motion.button>
    </section>
  );
}
