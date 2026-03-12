'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { LayoutDashboard, TrendingUp, Bell, Users } from 'lucide-react';

export default function StorySolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      icon: LayoutDashboard,
      title: 'Beautiful Dashboards',
      description: 'Intuitive interfaces that make complex data simple and actionable.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: "See what's happening in your business as it unfolds, not days later.",
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified about what matters most, when it matters most.',
      color: 'from-primary to-primary-dark',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights, not confusion. Work together on data-driven decisions.',
      color: 'from-primary to-primary-dark',
    },
  ];

  return (
    <section
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
            Intelligence <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">without</span> <br />
            Complexity
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium uppercase tracking-[0.2em]"
          >
            A new standard for business systems. <br />
            Human-centric design meets machine-grade precision.
          </motion.p>
        </motion.div>

        {/* High Impact Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col gap-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-6">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">{solution.title}</h3>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                      <Icon className="text-white/60 group-hover:text-primary transition-colors" size={24} />
                    </div>
                  </div>
                  <p className="text-white/80 text-xl leading-relaxed group-hover:text-white/80 transition-colors">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
