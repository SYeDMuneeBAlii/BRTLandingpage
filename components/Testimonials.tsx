'use client';

import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Founder at TechFlow',
    quote:
      'This analytics platform transformed how we understand our users. The insights helped us increase conversion by 240% in just 3 months.',
    avatar: 'SC',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager at GrowthLab',
    quote:
      'The real-time data and intuitive dashboard made it easy for our entire team to make data-driven decisions. Absolutely game-changing.',
    avatar: 'MR',
  },
  {
    name: 'Emily Watson',
    role: 'CEO at StartupXYZ',
    quote:
      "Finally, an analytics tool that doesn't require a PhD to understand. The automated insights save us hours every week.",
    avatar: 'EW',
  },
  {
    name: 'David Park',
    role: 'Growth Lead at ScaleUp',
    quote:
      'The user segmentation features are incredible. We can now target our campaigns with precision and see immediate results.',
    avatar: 'DP',
  },
  {
    name: 'Lisa Thompson',
    role: 'Marketing Director at InnovateCorp',
    quote:
      "Best investment we've made for our startup. The ROI tracking and funnel analysis helped us optimize our entire sales process.",
    avatar: 'LT',
  },
  {
    name: 'Alex Kumar',
    role: 'CTO at DevCo',
    quote:
      'Clean integration, powerful features, and excellent support. Our development team was able to implement it in less than a day.',
    avatar: 'AK',
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

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#0ea5e9'}}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
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
            Loved by thousands
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what our customers are saying about their experience with our analytics platform
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm transition-all relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, rotate: 1 }}
            >
              {/* Animated quote mark */}
              <motion.div
                className="absolute top-4 right-4 text-6xl opacity-10 text-primary"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                &quot;
              </motion.div>

              <p className="text-slate-300 leading-relaxed mb-6 italic relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <motion.div
                className="flex items-center relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 bg-linear-to-br from-primary to-secondary"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

