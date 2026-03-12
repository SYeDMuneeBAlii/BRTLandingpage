'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Rocket, Globe, Sparkles } from 'lucide-react';

export default function StoryFuture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const ctaCards = [
    {
      icon: Rocket,
      title: 'Start Your Journey',
      description: 'Join thousands of teams already transforming their business with data.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: Globe,
      title: 'See the Impact',
      description: 'Discover how analytics can revolutionize your decision-making process.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: Sparkles,
      title: 'Build the Future',
      description: "Be part of the movement that's changing how businesses understand their data.",
      gradient: 'from-primary to-primary-dark',
    },
  ];

  return (
    <section
      id="future"
      ref={ref}
      className="relative min-h-screen py-24 sm:py-48 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-left mb-24 md:mb-48"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="narrative-title text-white mb-12"
          >
            Write Your <br />
            <span className="text-accent italic font-serif lowercase tracking-normal">next</span> <br />
            Success story
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium uppercase tracking-[0.2em] mb-16"
          >
            The tools are ready. The path is clear. <br />
            Are you ready to architect the future?
          </motion.p>

          <button className="group relative px-12 py-6 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Get Started Now</span>
            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>

        {/* CTA Cards - Minimal Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-white/5">
          {ctaCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <h3 className="text-sm font-black text-white uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 text-xs font-bold leading-relaxed group-hover:text-white/80 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
