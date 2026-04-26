'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { coreModules } from '@/lib/data/modules';
import { resolvePath } from '@/lib/utils/path';
import { ArrowRight, Box } from 'lucide-react';
import Link from 'next/link';

export default function ModulesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const ActiveIcon = coreModules[activeIndex]?.icon || Box;

  return (
    <section 
      ref={containerRef}
      id="features" 
      className="relative bg-[#050505] text-white selection:bg-primary/30 selection:text-primary-light"
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-40 mix-blend-screen" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
      </div>

      <div className="flex flex-col xl:flex-row relative z-10 max-w-[1600px] mx-auto">
        
        {/* LEFT: Sticky Media Area (Hidden on mobile/tablet) */}
        <div className="hidden xl:flex xl:w-1/2 xl:sticky xl:top-0 xl:h-screen items-center justify-center p-12">
          
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.3)] backdrop-blur-3xl group">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, filter: 'blur(10px)', scale: 1.05 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <img 
                  src={resolvePath(coreModules[activeIndex]?.image ?? '')} 
                  alt={coreModules[activeIndex]?.title}
                  className="w-full h-full object-contain p-4 xl:p-8 opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000"
                />
                {/* Gradient overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent pointer-events-none" />
                
                {/* Dynamic Floating Info inside the image */}
                <div className="absolute bottom-10 left-10 right-10 pointer-events-none">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center gap-4 mb-4"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary backdrop-blur-xl shadow-lg">
                      <ActiveIcon size={28} />
                    </div>
                    <span className="text-white/80 font-mono text-sm tracking-[0.3em] uppercase">
                      Module {(activeIndex + 1).toString().padStart(2, '0')}
                    </span>
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-4xl 2xl:text-5xl font-black uppercase tracking-tight text-white drop-shadow-lg"
                  >
                    {coreModules[activeIndex]?.title}
                  </motion.h2>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* RIGHT: Scrollable Information Area */}
        <div className="xl:w-1/2 w-full py-24 xl:py-[35vh] px-6 md:px-12 xl:px-20 relative">
          
          {/* Mobile intro */}
          <div className="xl:hidden mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
              A Unified <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Business</span> Foundation
            </h2>
            <p className="text-xl md:text-2xl text-white/60">
              Every tool you need. Integrated. Built for speed, scale, and intelligence.
            </p>
          </div>

          <div className="flex flex-col space-y-[15vh] md:space-y-[25vh] xl:space-y-[60vh]">
            {coreModules.map((module, index) => (
              <ModuleScrollItem 
                key={module.slug}
                module={module}
                index={index}
                isActive={activeIndex === index}
                onEnter={() => setActiveIndex(index)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// Sub-component for individual module cards in the scroll view
function ModuleScrollItem({ module, index, isActive, onEnter }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = module.icon || Box;
  
  return (
    <motion.div
      ref={ref}
      onViewportEnter={onEnter}
      viewport={{ margin: "-40% 0px -40% 0px" }}
      className={`relative transition-all duration-700 ease-out ${isActive ? 'opacity-100 xl:translate-x-0 scale-100' : 'opacity-30 xl:-translate-x-8 xl:blur-[2px] scale-95'}`}
    >
      {/* Mobile Image Overlay (hidden on extra large screens where sticky view takes over) */}
      <div className="xl:hidden w-full aspect-video rounded-3xl overflow-hidden mb-10 border border-white/10 relative group">
        <img 
          src={resolvePath(module.image ?? '')} 
          alt={module.title}
          className="w-full h-full object-contain p-4 opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-primary backdrop-blur-md">
           <Icon size={24} />
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <span className="text-primary font-mono text-xs md:text-sm tracking-[0.3em] uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
          Module {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>
      
      <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[1.1] text-white">
        {module.title}
      </h3>
      
      <div className="space-y-4 mb-12 border-l-2 border-white/10 pl-6 lg:pl-8">
        {module.features?.slice(0, 5).map((feature: string, idx: number) => (
          <div key={idx} className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed">
             {feature}
          </div>
        ))}
        {module.features && module.features.length > 5 && (
          <div className="text-lg md:text-xl text-white/40 italic pt-2">
            + {module.features.length - 5} additional powerful features
          </div>
        )}
      </div>

      <Link href={`/modules/${module.slug}`}>
        <motion.button 
          whileHover={{ x: 15 }}
          className="group flex items-center gap-4 text-xl md:text-2xl font-black uppercase tracking-widest text-white"
        >
          <span className="border-b-4 border-transparent group-hover:border-primary pb-1 group-hover:text-primary transition-all duration-300">
            Explore {module.title}
          </span>
          <ArrowRight className="text-white/30 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" size={32} />
        </motion.button>
      </Link>
    </motion.div>
  );
}
