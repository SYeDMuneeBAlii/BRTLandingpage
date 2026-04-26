import type { MetadataRoute } from 'next';
import { getAllModuleSlugs } from '@/lib/data/modules';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brtlanding.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/modules`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  const moduleSlugs = getAllModuleSlugs();
  const moduleRoutes: MetadataRoute.Sitemap = moduleSlugs.map((slug) => ({
    url: `${BASE_URL}/modules/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...moduleRoutes];
}
