'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Instagram, Linkedin, MessageCircle, Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    explore: [
      { name: 'Narrative', href: '#story' },
      { name: 'Journey', href: '#journey' },
      { name: 'Modules', href: '#features' },
      { name: 'Intelligence', href: '#impact' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Legal & Privacy', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'LinkedIn', 
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
      icon: Linkedin,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'WhatsApp', 
      href: `https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\+/g, '')}`,
      icon: MessageCircle,
      color: 'hover:text-emerald-500'
    },
  ];

  return (
    <footer className="relative bg-black text-white py-24 sm:py-32 md:py-48 px-6 sm:px-8 lg:px-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Narrative Branding */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col mb-12">
                <span className="text-4xl font-black uppercase tracking-tighter text-white">BRT</span>
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] mt-2">Architecture Technologies</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                The Story <br />
                <span className="text-white/20 italic">Continues.</span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-6 mt-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 ${social.color} transition-all duration-500 hover:scale-105 hover:bg-white/10`}
                  title={social.name}
                >
                  <social.icon size={20} />
                  <span className="text-xs font-black uppercase tracking-widest hidden sm:block">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-white/20" /> Explore
              </h3>
              <ul className="space-y-6">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="group flex items-center justify-between text-xl md:text-2xl font-black text-white/60 hover:text-white transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight size={20} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 flex items-center gap-2">
                <div className="w-8 h-[1px] bg-white/20" /> Connect
              </h3>
              <div className="space-y-8">
                <p className="text-lg text-white/60 font-medium leading-relaxed">
                  Ready to build the next generation of your business? Reach out to our architects.
                </p>
                <a 
                  href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-primary text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-xl shadow-primary/20"
                >
                  Start Project <Send size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 md:mt-48 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
          <div className="flex gap-12">
            <p>© 2025 BRT ARCHITECTS</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEMS OPERATIONAL
          </div>
          <p className="italic">CRAFTED FOR THE FUTURE.</p>
        </div>
      </div>
    </footer>
  );
}
