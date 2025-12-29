'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for small teams getting started with user analytics and growth tracking',
    popular: false,
    features: [
      'Up to 10K tracked users',
      'Basic analytics dashboard',
      'Email notifications',
      'Mobile app tracking',
      '7-day data retention',
    ],
    cta: 'Start Free Trial',
    usedBy: '1K+ teams',
  },
  {
    name: 'Growth',
    price: '$79',
    description: 'Advanced analytics and insights for scaling businesses with comprehensive user tracking',
    popular: true,
    features: [
      'Up to 100K tracked users',
      'Advanced analytics & insights',
      'Real-time notifications',
      'API access & integrations',
      '90-day data retention',
      'A/B testing tools',
      'Custom reports',
    ],
    cta: 'Choose Growth',
    usedBy: '4K+ teams',
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'Complete analytics solution for large organizations with unlimited tracking and premium support',
    popular: false,
    features: [
      'Unlimited tracked users',
      'Custom dashboard builder',
      '24/7 priority support',
      'Advanced API & webhooks',
      'Unlimited data retention',
      'White-label solutions',
      'Dedicated success manager',
    ],
    cta: 'Contact Sales',
    usedBy: '500+ teams',
  },
];

const teamMembers = [
  { name: 'Alex Rivera', avatar: 'AR' },
  { name: 'Sarah Chen', avatar: 'SC' },
  { name: 'Marcus Johnson', avatar: 'MJ' },
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

const cardVariants = {
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#0ea5e9'}}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
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
            Start free, scale smart
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the perfect plan for your startup. Start free and upgrade as you grow. All plans include core analytics features.
          </p>
        </motion.div>

        {/* Feature Comparison */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 p-4 bg-slate-900/50 rounded-xl border border-white/5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm font-semibold text-white">All Features</div>
          <div className="text-center text-xs text-slate-400">Growth</div>
          <div className="text-center text-xs text-slate-400">Design</div>
          <div className="text-center text-xs text-slate-400">Support</div>
          <div className="text-center text-xs text-slate-400">Development</div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl transition-all bg-slate-900/50 border border-white/5 backdrop-blur-xl ${
                plan.popular ? 'ring-2 ring-primary border-primary/50' : ''
              }`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <motion.div
                  className="flex items-baseline justify-center mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">/month</span>
                </motion.div>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>
                <p className="text-sm text-slate-500">Billed monthly, cancel anytime</p>
              </div>

              {/* Team Members */}
              <motion.div
                className="flex items-center justify-center gap-2 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {teamMembers.map((member, idx) => (
                  <motion.div
                    key={idx}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold bg-linear-to-br from-primary to-secondary"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {member.avatar}
                  </motion.div>
                ))}
                <span className="text-sm text-slate-400">Used by {plan.usedBy}</span>
              </motion.div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                  >
                    <Check className="mr-3 mt-0.5 flex-shrink-0 text-primary" size={20} />
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={plan.name === 'Enterprise' ? `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\+/g, '')}` : '/dashboard'}
                target={plan.name === 'Enterprise' ? '_blank' : undefined}
                rel={plan.name === 'Enterprise' ? 'noopener noreferrer' : undefined}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions CTA */}
        <motion.div
          className="mt-12 text-center rounded-2xl p-8 bg-slate-900/50 border border-primary/20 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01, borderColor: 'rgba(56, 189, 248, 0.4)' }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">Need custom solutions?</h3>
          <p className="text-slate-400 mb-6">
            Get tailored analytics solutions, custom integrations, and dedicated support for your growing business.
          </p>
          <a
            href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20"
          >
            Contact Sales
          </a>
        </motion.div>
      </div>
    </section>
  );
}
