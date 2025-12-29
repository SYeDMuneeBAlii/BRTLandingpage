'use client';

import { TrendingUp, Users, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: Users,
    label: 'Growing Startups',
    value: '4000+',
    description: 'Trust our platform worldwide',
  },
  {
    icon: TrendingUp,
    label: 'Average Growth',
    value: '240%',
    description: 'Revenue increase in 6 months',
  },
  {
    icon: Activity,
    label: 'Uptime Guarantee',
    value: '99.9%',
    description: 'Enterprise-grade reliability',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-950">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1), transparent 50%), radial-gradient(circle at 80% 80%, rgba(129, 140, 248, 0.1), transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Numbers that speak
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See why thousands of startups choose our platform to accelerate their growth and make data-driven decisions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="p-8 rounded-2xl text-center bg-slate-900/50 border border-white/5 relative overflow-hidden group backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{background: 'linear-gradient(to bottom right, var(--primary), var(--secondary))'}}
                  initial={false}
                />

                <motion.div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 bg-primary/20 text-primary border border-primary/20"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={32} />
                </motion.div>
                <motion.div
                  className="text-5xl font-bold text-white mb-2 relative z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xl font-semibold text-slate-200 mb-2 relative z-10">{stat.label}</div>
                <div className="text-slate-400 relative z-10">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
