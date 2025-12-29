'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Instagram, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-md bg-zinc-900/90 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-8 pb-0 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Get in Touch</h3>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest mt-1">Connect with us on Social</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 space-y-4">
              <a
                href={`https://wa.me/${(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '').replace(/\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight">WhatsApp</h4>
                    <p className="text-emerald-500/60 text-[10px] font-bold uppercase tracking-widest">Instant Message</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-emerald-500/40 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-500" />
              </a>

              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl transition-all duration-500"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-500">
                    <Instagram size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight">Instagram</h4>
                    <p className="text-pink-500/60 text-[10px] font-bold uppercase tracking-widest">Follow & DM</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-pink-500/40 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-500" />
              </a>
            </div>

            {/* Footer */}
            <div className="p-8 pt-0">
              <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] text-center">
                Response time: usually within 2 hours
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

