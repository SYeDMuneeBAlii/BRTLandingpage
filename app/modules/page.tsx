import type { Metadata } from 'next';
import ModulesPageClient from '@/components/modules/ModulesPageClient';

export const metadata: Metadata = {
  title: 'Platform Modules',
  description:
    'Explore 25+ integrated business modules from Business Architect Technologies — CRM, Logistics, Finance, LMS, HRM, NFT Marketplace, and more. One unified platform built for scale.',
  keywords: [
    'business modules',
    'CRM module',
    'logistics module',
    'financial module',
    'LMS module',
    'HRM module',
    'ERP modules',
    'business platform modules',
  ],
  openGraph: {
    title: 'Platform Modules | Business Architect Technologies',
    description:
      'Explore 25+ integrated business modules — CRM, Logistics, Finance, LMS, HRM, and more. One unified platform built for scale and intelligence.',
    url: '/modules',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform Modules | Business Architect Technologies',
    description:
      'Explore 25+ integrated business modules — CRM, Logistics, Finance, LMS, HRM, and more.',
  },
  alternates: {
    canonical: '/modules',
  },
};

export default function ModulesPage() {
  return <ModulesPageClient />;
}
