'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, PieChart } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { resolvePath } from '@/lib/utils/path';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

const trafficData = [
  { name: 'Youtube', value: 35 },
  { name: 'Google', value: 30 },
  { name: 'Direct', value: 20 },
  { name: 'Reddit', value: 15 },
];

const COLORS = ['#0086b3', '#33a3c4', '#0086b3', '#006b8f'];

const customers = [
  { id: 'RZ17308', customer: 'Pranjalpets', date: '13/01/2025', amount: '$ 54 000', status: 'Shipped' },
  { id: 'RZ8308', customer: 'Adom.com', date: '13/01/2025', amount: '$ 86 050', status: 'Delivered' },
  { id: 'RZ8765', customer: 'Charles Tea', date: '13/01/2025', amount: '$ 4 000', status: 'Paid' },
];

const statusColors: { [key: string]: string } = {
  Shipped: 'bg-blue-500/20 text-blue-400',
  Delivered: 'bg-emerald-500/20 text-emerald-400',
  Paid: 'bg-primary/20 text-primary',
};
const statusColorsStyle: { [key: string]: { backgroundColor: string; color: string } } = {
  Paid: { backgroundColor: 'var(--primary)', color: 'white' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function Hero() {
  return (
    <section className="relative pt-48 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-black">
      {/* Background Gradient - Ultra Minimal */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="glass-pill mb-12 inline-flex items-center gap-2"
            variants={itemVariants}
          >
            <span className="text-white font-black">Launching 2025</span>
          </motion.div>

          <motion.h1
            className="narrative-title text-white mb-12"
            variants={itemVariants}
          >
            Design Your <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">business</span> <br />
            Future
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-[0.2em] mb-16"
            variants={itemVariants}
          >
            A modular platform for modern enterprises. <br />
            Built for those who demand precision and scale.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-32"
            variants={itemVariants}
          >
            <Link
              href="/dashboard"
              className="group relative px-12 py-6 bg-white text-black text-xs font-black uppercase tracking-[0.4em] rounded-full hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Explore Dashboard</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
            <Link
              href="#features"
              className="text-xs font-black uppercase tracking-[0.4em] text-white/80 hover:text-white transition-all duration-300"
            >
              View Ecosystem
            </Link>
          </motion.div>

          {/* High Impact Visual */}
          <motion.div
            className="relative max-w-5xl mx-auto"
            variants={itemVariants}
          >
            <div className="relative rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm shadow-2xl group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={resolvePath("/dashboards/Executive.png")}
                alt="Executive Dashboard Preview"
                className="w-full h-auto transform transition-all duration-1000 group-hover:scale-[1.02]"
              />
            </div>
            
            {/* Decorative Glows */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </motion.div>
        </motion.div>

        {/* Trusted By Section - Ultra Minimal */}
        <motion.div
          className="mt-32 md:mt-48 pt-12 border-t border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-20 grayscale">
            {['GitHub', 'GitLab', 'Reddit', 'Discord', 'Slack', 'Trello'].map((company, index) => (
              <span
                key={index}
                className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:opacity-100 transition-opacity cursor-default"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
