'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

export default function StoryImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const impacts = [
    {
      icon: TrendingUp,
      value: '240%',
      label: 'Average Growth',
      description: 'Revenue increase in 6 months',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Users,
      value: '4,000+',
      label: 'Growing Startups',
      description: 'Trust our platform worldwide',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Award,
      value: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Zap,
      value: '10x',
      label: 'Faster Decisions',
      description: 'Real-time insights at your fingertips',
      color: 'from-primary to-primary-dark',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder at TechFlow',
      quote: 'This platform transformed how we understand our users. Conversion increased by 240% in just 3 months.',
      avatar: 'SC',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager at GrowthLab',
      quote: 'The real-time data made it easy for our entire team to make data-driven decisions. Absolutely game-changing.',
      avatar: 'MR',
    },
  ];

  return (
    <section
      id="impact"
      ref={ref}
      className="relative min-h-screen py-24 sm:py-48 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24 md:mb-48"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="narrative-title text-white mb-12"
          >
            Real <br />
            <span className="text-emerald-500 italic font-serif lowercase tracking-normal">measurable</span> <br />
            Impact
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-[0.2em]"
          >
            The proof is in the data. <br />
            Success stories written in numbers and growth.
          </motion.p>
        </motion.div>

        {/* Impact Stats - Ultra Minimalist Large Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border-l border-white/10 pl-12"
            >
              <div className="text-8xl font-black text-white group-hover:text-emerald-500 transition-colors duration-700 leading-none mb-6">
                {impact.value}
              </div>
              <div className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {impact.label}
              </div>
              <div className="text-white/80 text-lg font-medium">
                {impact.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials - Minimal Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-white/5 absolute -top-12 -left-8 text-[12rem] font-serif leading-none">&quot;</div>
              <p className="text-2xl md:text-3xl font-medium text-white/80 leading-relaxed italic mb-12 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black uppercase tracking-widest">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-widest">{testimonial.name}</div>
                  <div className="text-[10px] font-black text-white/80 uppercase tracking-[0.2em] mt-1">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
