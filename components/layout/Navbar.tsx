'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onContactClick: () => void;
}

const navLinks = [
  { name: 'Story', href: '#story', type: 'hash' as const },
  { name: 'Journey', href: '#journey', type: 'hash' as const },
  { name: 'Modules', href: '/modules', type: 'path' as const },
  { name: 'Impact', href: '#impact', type: 'hash' as const },
  { name: 'Future', href: '#future', type: 'hash' as const },
];

export default function Navbar({ onContactClick }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function getLinkHref(link: (typeof navLinks)[0]) {
    if (link.type === 'path') return link.href;
    return isHome ? link.href : `/${link.href}`;
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
              Business Architecture
              </span>
              <span className="text-[12px] font-black text-white/80 uppercase tracking-[0.3em] leading-none mt-1">
              Technologies
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getLinkHref(link)}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80 hover:text-white transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button 
              onClick={onContactClick}
              className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full hover:bg-primary transition-all duration-300 inline-block cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <motion.button
              className="p-2 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-slate-800 bg-slate-950/90 backdrop-blur-xl rounded-b-2xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="py-4 px-2 space-y-1">
                {navLinks.map((link, index) => (
                  <Link key={link.name} href={getLinkHref(link)} onClick={() => setMobileMenuOpen(false)}>
                    <motion.span
                      className="block px-4 py-3 text-base font-semibold text-slate-300 hover:bg-primary/10 hover:text-primary rounded-xl transition-all"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
                <motion.button
                  className="w-full text-left px-4 py-3 text-base font-semibold text-primary hover:bg-primary/10 rounded-xl transition-all"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
