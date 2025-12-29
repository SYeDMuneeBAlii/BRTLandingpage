'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { resolvePath } from '@/lib/utils/path';

const dashboards = [
  {
    title: 'Executive Overview',
    description: 'High-level insights for decision makers.',
    image: '/dashboards/Executive.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    title: 'Financial Analytics',
    description: 'Track revenue, expenses, and growth metrics.',
    image: '/dashboards/Financial.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    title: 'CRM & Customer Success',
    description: 'Manage relationships and track engagement.',
    image: '/dashboards/CRM.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Real-time tracking and route optimization.',
    image: '/dashboards/Logistics.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack storefront and inventory management.',
    image: '/dashboards/E-Commerce.png',
    color: 'from-primary/20 to-transparent',
  },
  {
    title: 'Project Management',
    description: 'Collaborate and deliver on time, every time.',
    image: '/dashboards/Project.png',
    color: 'from-primary/20 to-transparent',
  },
];

export default function HorizontalGallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal translation based on scroll progress
  // We move -75% to account for the width of the cards and the container
  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-75%']);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-[200px]" />
        </div>

        <motion.div style={{ x }} className="flex gap-24 px-[15vw]">
          {dashboards.map((item, index) => (
            <div
              key={index}
              className="group relative flex-shrink-0 w-[80vw] md:w-[65vw] lg:w-[55vw] aspect-video"
            >
              {/* Card Container */}
              <div className="relative h-full w-full rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-white/20 transition-all duration-700">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                
                {/* Image */}
                <img
                  src={resolvePath(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-1000 ease-out"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90 p-12 md:p-16 flex flex-col justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="text-white/80 font-black tracking-[0.3em] uppercase text-[10px] mb-6 block">
                      Module 0{index + 1}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-lg md:text-xl max-w-xl font-medium leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-linear-to-b from-primary/50 to-transparent" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}

