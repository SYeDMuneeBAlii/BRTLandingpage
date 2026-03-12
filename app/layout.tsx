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

export const metadata: Metadata = {
  title: "Business Architect Technologies - Grow your users. Smarter.",
  description: "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.",
  keywords: ["analytics", "business intelligence", "dashboard", "SaaS", "growth analytics"],
  authors: [{ name: "Business Architect Technologies" }],
  creator: "Business Architect Technologies",
  publisher: "Business Architect Technologies",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
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
