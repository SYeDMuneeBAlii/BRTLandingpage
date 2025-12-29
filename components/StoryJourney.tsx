'use client';

import { motion, useInView, useScroll, useTransform, type Variants } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Rocket, Target, Zap } from 'lucide-react';

export default function StoryJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const cardYReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const journeySteps = [
    {
      icon: Lightbulb,
      title: 'The Spark',
      description: 'An idea: What if analytics could tell stories, not just show numbers?',
      year: '2021',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Zap,
      title: 'The Vision',
      description: 'Real-time insights that anyone could understand, not just data scientists.',
      year: '2022',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Rocket,
      title: 'The Launch',
      description: 'Building the platform that transforms data into actionable intelligence.',
      year: '2023',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Target,
      title: 'The Mission',
      description: 'Empowering thousands of teams to make data-driven decisions with confidence.',
      year: '2024',
      color: 'from-primary to-primary-dark',
    },
  ];

  return (
    <section
      id="journey"
      ref={ref}
      className="relative min-h-screen py-24 sm:py-48 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--secondary),transparent_60%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-right mb-24 md:mb-48"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="glass-pill mb-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white font-black">03 // THE GENESIS</span>
          </motion.div>

          <motion.h2
            className="narrative-title text-white mb-12"
          >
            Building the <br />
            <span className="text-secondary italic font-serif lowercase tracking-normal">architecture of</span> <br />
            Tomorrow
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl ml-auto leading-relaxed font-medium uppercase tracking-[0.2em]"
          >
            A journey of innovation. <br />
            From a single line of code to a global ecosystem.
          </motion.p>
        </motion.div>

        {/* Timeline - High Impact Minimalist */}
        <div className="space-y-32">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-2">
                  <span className="text-8xl md:text-9xl font-black text-white/5 group-hover:text-secondary/20 transition-colors duration-700">
                    {step.year}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/80 text-xl leading-relaxed max-w-xl group-hover:text-white/80 transition-colors duration-500">
                    {step.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex justify-end">
                  <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-secondary transition-colors duration-500">
                    <Icon className="text-white/60 group-hover:text-secondary transition-colors duration-500" size={40} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}