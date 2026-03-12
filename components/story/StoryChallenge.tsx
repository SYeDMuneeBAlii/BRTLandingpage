'use client';

import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { AlertCircle, BarChart3, TrendingDown, Users } from 'lucide-react';

export default function StoryChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const challenges = [
    {
      icon: AlertCircle,
      title: 'The Problem',
      description: 'Organizations were drowning in data but starving for insights. Millions of metrics, yet zero clarity.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: BarChart3,
      title: 'The Chaos',
      description: 'Scattered dashboards, disconnected tools, and conflicting reports left teams making decisions in the dark.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: TrendingDown,
      title: 'The Cost',
      description: 'Poor decisions led to missed opportunities. Growth slowed, innovation stalled, and operational inefficiencies multiplied.',
      gradient: 'from-primary to-primary-dark',
    },
    {
      icon: Users,
      title: 'The Impact',
      description: 'Teams grew frustrated, customers drifted away, and leaders asked the hard question: "Where did we go wrong?"',
      gradient: 'from-primary to-primary-dark',
    },
  ];

  return (
    <section
      id="story"
      ref={ref}
      className="relative min-h-screen py-24 sm:py-48 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Background Decoration */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,var(--accent),transparent_50%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: titleY }}
          className="text-left mb-24 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="narrative-title text-white mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Data is everywhere. <br />
            <span className="text-accent italic font-serif lowercase tracking-normal">but</span> <br />
            Answers are rare.
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium uppercase tracking-[0.2em]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Disconnected tools. Scattered reports. <br />
            A digital landscape designed for confusion.
          </motion.p>
        </motion.div>

        {/* Challenge Cards - Minimal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="group border-b border-white/10 pb-12"
            >
              <div className="flex items-start gap-8">
                <div className="text-white/60 font-black text-6xl group-hover:text-accent transition-colors duration-500">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wider">
                    {challenge.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg font-medium group-hover:text-white/80 transition-colors duration-500">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
