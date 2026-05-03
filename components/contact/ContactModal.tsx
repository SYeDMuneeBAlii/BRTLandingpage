'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Instagram, Linkedin, ExternalLink, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [view, setView] = useState<'options' | 'schedule'>('options');
  
  // Replace this with your actual Google Appointment Scheduling URL
  const googleScheduleUrl = process.env.NEXT_PUBLIC_GOOGLE_SCHEDULING_URL || '';

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset view when modal opens
      setView('options');
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
            layout
            className={`relative w-full bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-2xl shadow-2xl flex flex-col transition-all duration-500 ${
              view === 'schedule' ? 'max-w-5xl h-[85vh]' : 'max-w-md h-auto'
            }`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-6 sm:p-8 pb-0 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4">
                {view === 'schedule' && (
                  <button
                    onClick={() => setView('options')}
                    className="p-2 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full transition-all duration-300"
                    aria-label="Back to options"
                  >
                    <ArrowLeft size={20} />
                  </button>
                )}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter">
                    {view === 'schedule' ? 'Schedule a Meeting' : 'Get in Touch'}
                  </h3>
                  <p className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">
                    {view === 'schedule' ? 'Select a time that works for you' : 'Connect with us directly'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white rounded-full transition-all duration-300"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 flex-1 overflow-y-auto custom-scrollbar relative">
              <AnimatePresence mode="wait">
                {view === 'options' ? (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Schedule Meeting Button */}
                    <button
                      onClick={() => setView('schedule')}
                      className="w-full group flex items-center justify-between p-6 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-2xl transition-all duration-500 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                          <Calendar size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-black uppercase tracking-tight">Schedule Meeting</h4>
                          <p className="text-primary/70 text-[10px] font-bold uppercase tracking-widest">Book a time via Google</p>
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-500" />
                    </button>

                    <div className="relative py-4 flex items-center">
                      <div className="flex-grow border-t border-white/5"></div>
                      <span className="shrink-0 px-4 text-white/30 text-xs font-bold uppercase tracking-widest">OR</span>
                      <div className="flex-grow border-t border-white/5"></div>
                    </div>

                    {/* WhatsApp */}
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

                    {/* Instagram */}
                    <a
                      href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-6 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 hover:border-pink-500/40 rounded-2xl transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-500">
                          <Instagram size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-black uppercase tracking-tight">Instagram</h4>
                          <p className="text-pink-500/60 text-[10px] font-bold uppercase tracking-widest">Follow & DM</p>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-pink-500/40 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-500" />
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-6 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-2xl transition-all duration-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                          <Linkedin size={24} />
                        </div>
                        <div>
                          <h4 className="text-white font-black uppercase tracking-tight">LinkedIn</h4>
                          <p className="text-blue-500/60 text-[10px] font-bold uppercase tracking-widest">Connect & Network</p>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-blue-500/40 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-500" />
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="schedule"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col bg-white rounded-2xl overflow-hidden"
                  >
                    {googleScheduleUrl ? (
                      <iframe 
                        src={googleScheduleUrl}
                        width="100%" 
                        height="100%" 
                        frameBorder="0"
                        className="flex-1 w-full h-full min-h-[500px]"
                        title="Google Appointment Scheduling"
                      />
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-zinc-900 border border-white/10 rounded-2xl">
                        <Calendar size={48} className="text-primary mb-6" />
                        <h4 className="text-2xl font-black text-white uppercase tracking-tight mb-4">Scheduling Coming Soon</h4>
                        <p className="text-white/60 mb-8 max-w-md mx-auto">
                          Online scheduling is not available yet. Please use one of the other contact methods below.
                        </p>
                        <button 
                          onClick={() => setView('options')}
                          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold uppercase tracking-wider transition-colors"
                        >
                          Go Back
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            {view === 'options' && (
              <div className="p-6 sm:p-8 pt-0 shrink-0">
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] text-center">
                  Response time: usually within 2 hours
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

