'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ArrowLeft,
  Check,
  LayoutGrid,
  Zap,
  Shield,
  BarChart3,
  Users,
  Plug,
  Target,
  TrendingUp,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ContactModal from '@/components/contact/ContactModal';
import { getModuleBySlug } from '@/lib/data/modules';
import { resolvePath } from '@/lib/utils/path';
import { useState, useEffect } from 'react';

const DUMMY_STATS = [
  { label: 'Integration time', value: '< 2 weeks', icon: Clock },
  { label: 'Uptime SLA', value: '99.9%', icon: Shield },
  { label: 'Teams using', value: '500+', icon: Users },
  { label: 'Reports built-in', value: '50+', icon: BarChart3 },
];

const DUMMY_HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Connect your data',
    description: 'Link your existing tools and workflows in minutes. Our connectors support all major platforms and custom APIs.',
    imageSeed: 'connect',
  },
  {
    step: '02',
    title: 'Configure & customize',
    description: 'Set rules, automations, and views that match your team. No code required for most configurations.',
    imageSeed: 'configure',
  },
  {
    step: '03',
    title: 'Launch & scale',
    description: 'Go live with confidence. Monitor performance and scale as your business grows with real-time dashboards.',
    imageSeed: 'launch',
  },
];

const DUMMY_USE_CASES = [
  {
    title: 'Centralize operations',
    description: 'Bring scattered processes into one place. Reduce context switching and keep everyone aligned.',
    icon: Target,
  },
  {
    title: 'Automate repetitive work',
    description: 'Set up triggers and actions so routine tasks run themselves. Free your team for higher-value work.',
    icon: Zap,
  },
  {
    title: 'Measure what matters',
    description: 'Track KPIs and outcomes in real time. Custom reports and alerts keep stakeholders informed.',
    icon: TrendingUp,
  },
];

const DUMMY_BENEFITS = [
  'Role-based access and enterprise-grade security',
  'REST API and webhooks for custom integrations',
  'Dedicated success manager for onboarding',
  'Regular product updates and new features',
  'Documentation, tutorials, and 24/7 support',
];

const DUMMY_INTEGRATIONS = [
  'Slack',
  'Google Workspace',
  'Stripe',
  'Salesforce',
  'HubSpot',
  'Zapier',
  'Custom API',
];

export default function ModuleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const moduleItem = slug ? getModuleBySlug(slug) : undefined;

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.98]);

  useEffect(() => {
    if (slug && !moduleItem) {
      router.replace('/modules');
    }
  }, [slug, moduleItem, router]);

  if (!slug || !moduleItem) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 mb-6"
          >
            Loading...
          </motion.p>
          <Link
            href="/modules"
            className="text-primary hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} /> Back to Modules
          </Link>
        </div>
      </main>
    );
  }

  const Icon = moduleItem.icon;
  const accentColor = moduleItem.color;

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar onContactClick={() => setContactModalOpen(true)} />

      {/* Hero — modern gradient mesh + refined typography */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 pointer-events-none"
        >
          <div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[180px] opacity-50"
            style={{ background: `radial-gradient(circle, ${accentColor}25, transparent 60%)` }}
          />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/modules"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all text-sm font-medium"
            >
              <ArrowLeft size={14} /> All modules
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-start gap-8"
          >
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 ring-1 ring-white/10"
              style={{
                background: `linear-gradient(135deg, ${accentColor}25, ${accentColor}08)`,
                boxShadow: `0 0 40px ${accentColor}20`,
              }}
            >
              <Icon size={28} className="sm:w-7 sm:h-7" style={{ color: accentColor }} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                {moduleItem.priority}
              </span>
              <h1 className="mt-1.5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                {moduleItem.title}
              </h1>
              <p className="mt-5 text-lg text-slate-400 max-w-xl leading-relaxed">
                A powerful module built for scale and intelligence. Streamline workflows, automate processes, and get real-time visibility—all integrated into the BRT platform.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                One source of truth. One experience for your team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats — cardless row with dividers */}
      <section className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/10"
          >
            {DUMMY_STATS.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-center md:text-left md:px-8 first:md:pl-0 last:md:pr-0"
                >
                  <StatIcon className="mx-auto md:mx-0 mb-2 w-5 h-5 opacity-80" style={{ color: accentColor }} />
                  <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">{stat.value}</div>
                  <div className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main preview image — cardless */}
      {moduleItem.image && (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={resolvePath(moduleItem.image)}
                alt={`${moduleItem.title} overview`}
                className="w-full aspect-[16/10] object-cover object-top"
              />
              <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Module overview
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* How it works — cardless timeline */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">How it works</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Three steps to go live
            </h2>
          </motion.div>

          <div className="space-y-16 sm:space-y-20">
            {DUMMY_HOW_IT_WORKS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold bg-black border mb-4"
                    style={{ color: accentColor, borderColor: `${accentColor}40`, borderWidth: 1 }}
                  >
                    {item.step}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div
                  className="lg:col-span-7 order-1 lg:order-2 rounded-xl overflow-hidden aspect-video flex items-center justify-center text-slate-500 text-sm font-medium"
                  style={{
                    background: `linear-gradient(160deg, ${accentColor}10 0%, transparent 50%), rgba(255,255,255,0.02)`,
                  }}
                >
                  {item.imageSeed}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities + image — cardless two-column */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {moduleItem.image && (
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-7 order-2 lg:order-1 rounded-2xl overflow-hidden"
              >
                <img
                  src={resolvePath(moduleItem.image)}
                  alt={moduleItem.title}
                  className="w-full aspect-video object-cover object-top"
                />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={moduleItem.image ? 'lg:col-span-5 order-1 lg:order-2' : 'lg:col-span-12'}
            >
              <div className="flex items-center gap-2 mb-6">
                <LayoutGrid size={16} className="opacity-60" style={{ color: accentColor }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Capabilities
                </span>
              </div>
              {moduleItem.features && moduleItem.features.length > 0 ? (
                <ul className="space-y-3">
                  {moduleItem.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.02 }}
                      className="flex items-start gap-3 text-slate-300 text-sm"
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${accentColor}20` }}
                      >
                        <Check size={12} style={{ color: accentColor }} />
                      </span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 text-sm">
                  Full capabilities documented in the platform. Contact us for a detailed spec.
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use cases — cardless list */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">Use cases</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Built for how you work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {DUMMY_USE_CASES.map((useCase, i) => {
              const CaseIcon = useCase.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className=""
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <CaseIcon size={20} style={{ color: accentColor }} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + integrations — cardless two-column with divider */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 lg:divide-x lg:divide-white/10">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                Why this module
              </span>
              <ul className="mt-6 space-y-3">
                {DUMMY_BENEFITS.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="flex items-start gap-3 text-slate-300 text-sm"
                  >
                    <Check size={16} className="shrink-0 mt-0.5" style={{ color: accentColor }} />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-12"
            >
              <div className="flex items-center gap-2 mb-5">
                <Plug size={16} className="opacity-60" style={{ color: accentColor }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                  Works with
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {DUMMY_INTEGRATIONS.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.02 }}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 text-xs font-medium"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
              <p className="mt-5 text-slate-500 text-xs">
                More integrations available. Custom API and webhooks for bespoke setups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA — prominent card */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Add {moduleItem.title} to your stack
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-md mx-auto">
              Get in touch with our architects. We’ll guide you from setup to launch.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setContactModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-black font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Start project <ArrowRight size={16} />
              </button>
              <Link
                href="/modules"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors"
              >
                <LayoutGrid size={16} /> All modules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </main>
  );
}
