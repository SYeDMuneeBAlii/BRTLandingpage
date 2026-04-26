import HomePageClient from '@/components/HomePageClient';

// JSON-LD for the homepage — SoftwareApplication schema
const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Business Architect Technologies Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'A unified, modular business platform with 25+ integrated modules — CRM, Logistics, Finance, LMS, HRM, and more. Built for scale and intelligence.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    name: 'Contact for pricing',
  },
  featureList: [
    'CRM & Customer Management',
    'Logistics & Shipment Tracking',
    'Financial Management & Invoicing',
    'Learning Management System (LMS)',
    'Human Resource Management (HRM)',
    'Real Estate Management',
    'Hospital Management System',
    'NFT Marketplace',
    'Bidding & Auction Platform',
    'Affiliate Management',
    'Executive Dashboard',
    'Social Media Management',
  ],
  author: {
    '@type': 'Organization',
    name: 'Business Architect Technologies',
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
