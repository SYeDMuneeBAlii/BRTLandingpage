import type { Metadata } from 'next';
import { getModuleBySlug, getAllModuleSlugs } from '@/lib/data/modules';
import ModuleDetailClient from '@/components/modules/ModuleDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render all known module pages at build time
export async function generateStaticParams() {
  return getAllModuleSlugs().map((slug) => ({ slug }));
}

// Per-module SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const moduleItem = getModuleBySlug(slug);

  if (!moduleItem) {
    return {
      title: 'Module Not Found',
      description: 'The requested module could not be found.',
      robots: { index: false, follow: false },
    };
  }

  const features = moduleItem.features?.slice(0, 5).join(', ') ?? '';
  const description = `Explore the ${moduleItem.title} module by Business Architect Technologies. ${features ? `Key capabilities: ${features}.` : ''} Built for scale, intelligence, and seamless integration.`;

  return {
    title: moduleItem.title,
    description,
    keywords: [
      moduleItem.title,
      `${moduleItem.title} software`,
      `${moduleItem.title} module`,
      'Business Architect Technologies',
      'business platform',
      'ERP',
    ],
    openGraph: {
      title: `${moduleItem.title} | Business Architect Technologies`,
      description,
      url: `/modules/${slug}`,
      type: 'website',
      images: moduleItem.image
        ? [
            {
              url: moduleItem.image,
              width: 1200,
              height: 630,
              alt: `${moduleItem.title} dashboard`,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${moduleItem.title} | Business Architect Technologies`,
      description,
      images: moduleItem.image ? [moduleItem.image] : [],
    },
    alternates: {
      canonical: `/modules/${slug}`,
    },
  };
}

export default function ModuleDetailPage() {
  return <ModuleDetailClient />;
}
