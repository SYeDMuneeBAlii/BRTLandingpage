import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://brtlanding.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Business Architect Technologies | Unified Business Platform',
    template: '%s | Business Architect Technologies',
  },
  description:
    'Business Architect Technologies delivers a unified, modular business platform — CRM, Logistics, Finance, LMS, HRM, and 25+ integrated modules built for scale and intelligence.',
  keywords: [
    'business management software',
    'ERP platform',
    'CRM system',
    'logistics management',
    'financial management',
    'LMS',
    'HRM software',
    'SaaS platform',
    'business intelligence',
    'unified business platform',
    'Business Architect Technologies',
  ],
  authors: [{ name: 'Business Architect Technologies', url: BASE_URL }],
  creator: 'Business Architect Technologies',
  publisher: 'Business Architect Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Business Architect Technologies',
    title: 'Business Architect Technologies | Unified Business Platform',
    description:
      'A unified, modular platform with 25+ integrated modules — CRM, Logistics, Finance, LMS, HRM — built for scale and intelligence.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Business Architect Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Architect Technologies | Unified Business Platform',
    description:
      'A unified, modular platform with 25+ integrated modules — CRM, Logistics, Finance, LMS, HRM — built for scale and intelligence.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@BRTechnologies',
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'technology',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Business Architect Technologies',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  description:
    'Business Architect Technologies delivers a unified, modular business platform with CRM, Logistics, Finance, LMS, HRM and 25+ integrated modules.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: 'English',
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Business Architect Technologies',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/modules/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Apollo website tracker - runs before interactive, injected into head by Next.js */}
        <Script id="apollo-tracker" strategy="beforeInteractive">
          {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69662e7b4d0aa30021566711"})},document.head.appendChild(o)}initApollo();`}
        </Script>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
