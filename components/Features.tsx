'use client';

import { Bell, Users, TrendingUp, BarChart3, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get real-time alerts for the updates that matter to you most.',
  },
  {
    icon: Users,
    title: 'Easy Collaborations',
    description: 'Streamlined solution for seamless and productive teamwork.',
  },
  {
    icon: TrendingUp,
    title: 'Fuel Your Growth',
    description: 'Empower your business with data-driven insights and analytics.',
  },
  {
    icon: BarChart3,
    title: 'Performance Metrics',
    description: 'Track your success with comprehensive analytics and insights.',
  },
  {
    icon: LayoutDashboard,
    title: 'Analytics Dashboard',
    description: 'Stay ahead with real-time data visualization and reporting.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
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

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#0ea5e9'}}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#6366f1'}}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Features Overview
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore the comprehensive features that set Arise apart in web design excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="p-8 rounded-2xl transition-all group relative overflow-hidden bg-slate-900/50 border border-white/5 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{background: 'linear-gradient(to bottom right, #38bdf8, #818cf8)'}} />
                
                <div className="relative z-10">
                  <motion.div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-primary/20 text-primary border border-primary/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
