'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    category: 'tracking',
    question: 'How do I start tracking users on my website?',
    answer:
      "Getting started is easy! Simply sign up for an account, install our lightweight JavaScript SDK on your website, and you'll begin tracking user events in real-time. The setup takes less than 5 minutes and requires no coding experience.",
  },
  {
    category: 'pricing',
    question: "What's included in the free trial?",
    answer:
      'Our free trial includes full access to all features for 14 days, with no credit card required. You can track up to 10,000 events per month, access all analytics dashboards, and try premium features like custom reports and API access.',
  },
  {
    category: 'pricing',
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer:
      "Yes! You can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we'll prorate any charges based on your billing cycle.",
  },
  {
    category: 'analytics',
    question: 'How accurate is the user tracking data?',
    answer:
      'Our platform uses advanced algorithms and real-time data processing to ensure 99.9% accuracy. We track user interactions with precision, handle duplicate events, and provide detailed metrics on user behavior, conversions, engagement, and retention.',
  },
  {
    category: 'tracking',
    question: 'Do you support mobile app tracking?',
    answer:
      "Absolutely! We provide SDKs for iOS and Android, allowing you to track user behavior across web and mobile platforms. Our unified dashboard gives you a complete view of your users' journey regardless of platform.",
  },
  {
    category: 'analytics',
    question: 'Can I export my analytics data?',
    answer:
      'Yes, you can export your data in multiple formats including CSV, JSON, and Excel. Enterprise plans also include API access for real-time data integration with your existing tools.',
  },
  {
    category: 'support',
    question: 'What kind of support do you offer?',
    answer:
      'Support varies by plan: Starter includes email support, Growth includes priority email support, and Enterprise includes 24/7 phone and chat support with a dedicated account manager. We also provide comprehensive documentation and video tutorials for all users.',
  },
  {
    category: 'tracking',
    question: 'Is my user data secure and compliant?',
    answer:
      'Yes! We take data security seriously. Our platform is GDPR, CCPA, and SOC 2 compliant. All data is encrypted in transit and at rest, and we never share your data with third parties. You have full control over data retention policies.',
  },
  {
    category: 'analytics',
    question: 'Can I create custom dashboards?',
    answer:
      'Yes! All plans include customizable dashboards. Growth and Enterprise plans offer advanced customization options including custom metrics, widgets, and white-label solutions for your brand.',
  },
  {
    category: 'support',
    question: 'Do you offer implementation assistance?',
    answer:
      'We provide comprehensive documentation, code examples, and video tutorials for all users. Enterprise customers receive dedicated implementation assistance from our technical team to ensure smooth integration.',
  },
];

const categories = ['All', 'Tracking', 'Pricing', 'Analytics', 'Support'];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs =
    activeCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#0ea5e9'}}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Got questions? We&apos;ve got answers
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about our analytics platform, pricing, and how to get started.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 border border-white/5'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {category !== 'All' && (
                <span className={`ml-2 text-xs ${activeCategory === category ? 'text-white/80' : 'text-slate-500'}`}>
                  {faqs.filter((faq) => faq.category.toLowerCase() === category.toLowerCase()).length}
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="rounded-xl overflow-hidden transition-all bg-slate-900/50 border border-white/5 backdrop-blur-sm relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.01, borderColor: 'rgba(255,255,255,0.1)' }}
              >
                <motion.button
                  onClick={() => toggle(index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`transition-colors ${openIndex === index ? 'text-primary' : 'text-slate-500'} shrink-0`} size={24} />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

