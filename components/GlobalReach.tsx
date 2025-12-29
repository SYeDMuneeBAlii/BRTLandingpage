'use client';

import Link from 'next/link';
import { Globe, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function GlobalReach() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{backgroundColor: '#0ea5e9'}}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Where We Work
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our worldwide presence and see where our templates and services are making an impact.
          </motion.p>

          {/* World Map Placeholder */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="w-full max-w-4xl h-96 rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden bg-slate-900/50 backdrop-blur-xl"
              whileHover={{ scale: 1.01, boxShadow: '0 20px 40px rgba(56, 189, 248, 0.1)' }}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.1), transparent 50%), radial-gradient(circle at 80% 70%, rgba(129, 140, 248, 0.1), transparent 50%)',
                }}
              />
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                  <Globe className="mx-auto mb-4 text-primary" size={64} />
                </motion.div>
                <p className="text-slate-400 text-lg font-medium">World Map</p>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="rounded-2xl p-12 text-white max-w-4xl mx-auto relative overflow-hidden bg-linear-to-br from-primary to-secondary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1), transparent 50%)',
              }}
            />

            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p
              className="text-xl mb-8 relative z-10 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join 4,000+ startups using our analytics platform to grow smarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all relative z-10 shadow-xl shadow-primary/20"
              >
                Get Started Free
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Link>
            </motion.div>
            <motion.p
              className="text-sm mt-4 relative z-10 text-white/70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              No credit card required • 14-day free trial
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

