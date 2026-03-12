'use client';

import Link from 'next/link';
import { motion, useInView, type Variants } from 'motion/react';
import { useRef } from 'react';
import { resolvePath } from '@/lib/utils/path';
import { coreModules } from '@/lib/data/modules';
import { ArrowRight } from 'lucide-react';

export default function ModulesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="features"
      ref={ref}
      className="relative min-h-screen py-24 sm:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-left mb-24 md:mb-48"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="narrative-title text-white mb-12"
          >
            A Unified <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">business</span> <br />
            Foundation
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium uppercase tracking-[0.2em]"
          >
            Every tool you need. Integrated. <br />
            Built for speed, scale, and intelligence.
          </motion.p>
        </motion.div>

        {/* Core Modules - Modern List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreModules.map((module, index) => (
            <motion.div
              key={module.slug}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={`/modules/${module.slug}`} className="block h-full">
                <div className="card-modern h-full flex flex-col group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={resolvePath(module.image ?? '')} 
                      alt={module.title}
                      className="w-full h-full object-cover object-top opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                  </div>

                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">{module.title}</h3>

                    <ul className="space-y-4 mb-8">
                      {module.features?.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-white/60 text-sm group-hover:text-white/80 transition-colors">
                          <div className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">Module {index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                      <ArrowRight size={16} className="text-white/60 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats - High Impact Minimalist */}
        <motion.div
          className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-3 gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[
            { label: 'Integrated Modules', value: '25', unit: '+' },
            { label: 'Global Infrastructure', value: '100', unit: '%' },
            { label: 'System Uptime', value: '99.9', unit: '%' },
          ].map((stat, index) => (
            <div key={index} className="text-left border-l border-white/10 pl-8">
              <div className="text-7xl font-black text-white mb-2">
                {stat.value}<span className="text-primary">{stat.unit}</span>
              </div>
              <div className="text-white/80 font-black uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
