'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
  onClick?: () => void;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  isFixed?: boolean;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  scrolled?: boolean;
  onContactClick?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#B497CF', '#5227FF'],
  items = [],
  className = '',
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#00f2ff', // default blueish like in landing
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose,
  scrolled = false,
  onContactClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  // Compute prelayer colors (up to 2 like old logic)
  const rawColors = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
  let preLayerColors = [...rawColors];
  if (preLayerColors.length >= 3) {
    preLayerColors.splice(Math.floor(preLayerColors.length / 2), 1);
  }

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) onMenuOpen?.();
    else onMenuClose?.();
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      onMenuClose?.();
    }
  };

  useEffect(() => {
    if (!closeOnClickAway || !isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnClickAway]);

  const xOffset = position === 'left' ? '-100%' : '100%';
  const xEnd = '0%';

  const btnColor = changeMenuColorOnOpen ? (isOpen ? openMenuButtonColor : menuButtonColor) : menuButtonColor;

  return (
    <div
      className={`z-[110] ${isFixed ? 'fixed top-0 left-0 w-screen h-screen pointer-events-none' : 'w-full h-full pointer-events-none'}`}
      style={accentColor ? ({ '--sm-accent': accentColor } as React.CSSProperties) : undefined}
    >
      {/* HEADER */}
      <header
        className={`absolute top-0 left-0 w-full flex items-center justify-between pointer-events-auto z-[120] transition-all duration-500 ${
          scrolled && !isOpen
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 h-24'
            : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex items-center justify-between">
          <div className="flex items-center select-none" aria-label="Logo">
            <a href="/" className="flex flex-col">
              <span className="text-2xl font-black uppercase tracking-tighter leading-none text-white">
                Business Architecture
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.3em] leading-none mt-1 text-white/80">
                Technologies
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6 pointer-events-auto">
            {onContactClick && (
              <button 
                onClick={onContactClick}
                className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors duration-300"
              >
                Schedule
              </button>
            )}
            
            <button
              ref={toggleBtnRef}
              onClick={toggleMenu}
              style={{ color: btnColor }}
              className="relative inline-flex items-center gap-2 bg-transparent border-0 cursor-pointer font-medium leading-none overflow-visible transition-colors duration-300"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {/* Text Roller */}
              <div className="relative h-[1.2em] overflow-hidden whitespace-nowrap min-w-[3em] flex flex-col justify-start items-start">
                <motion.div
                  initial={false}
                  animate={{ y: isOpen ? '-50%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  <span className="block h-[1.2em] leading-none uppercase text-sm font-semibold tracking-wider flex items-center">Menu</span>
                  <span className="block h-[1.2em] leading-none uppercase text-sm font-semibold tracking-wider flex items-center">Close</span>
                </motion.div>
              </div>

              {/* Cross/Plus Icon */}
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-4 h-4 flex-shrink-0"
              >
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-current -translate-y-1/2 rounded-full"
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 90 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-1/2 left-0 w-full h-[2px] bg-current -translate-y-1/2 rounded-full"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* OVERLAY PANEL */}
      <AnimatePresence>
        {isOpen && (
          <div className={`fixed top-0 left-0 w-screen h-screen z-40 pointer-events-auto ${className}`}>
            
            {/* Prelayers */}
            {preLayerColors.map((color, i) => (
              <motion.div
                key={i}
                initial={{ x: xOffset }}
                animate={{ x: xEnd }}
                exit={{ x: xOffset }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className="absolute top-0 right-0 h-full w-[clamp(260px,38vw,420px)] z-[5]"
                style={{ background: color, left: position === 'left' ? 0 : 'auto', right: position === 'right' ? 0 : 'auto' }}
              />
            ))}

            {/* Main Panel */}
            <motion.aside
              ref={panelRef}
              initial={{ x: xOffset }}
              animate={{ x: xEnd }}
              exit={{ x: xOffset }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: preLayerColors.length * 0.08 }}
              className="absolute top-0 h-full w-[clamp(260px,38vw,420px)] bg-black/90 flex flex-col p-[8em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-xl border-white/10"
              style={{
                left: position === 'left' ? 0 : 'auto',
                right: position === 'right' ? 0 : 'auto',
                borderLeftWidth: position === 'right' ? '1px' : '0',
                borderRightWidth: position === 'left' ? '1px' : '0',
              }}
            >
              <div className="flex-1 flex flex-col gap-5">
                <motion.ul
                  className="list-none m-0 p-0 flex flex-col gap-2 relative"
                  variants={{
                    open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {items.map((it, idx) => (
                    <li key={it.label + idx} className="relative overflow-hidden leading-none group">
                      <a
                        href={it.link}
                        onClick={(e) => {
                          if (it.onClick) {
                            e.preventDefault();
                            it.onClick();
                          }
                          closeMenu();
                        }}
                        className="relative text-white font-semibold text-[3rem] sm:text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase inline-block no-underline pr-8 hover:text-[var(--sm-accent)] transition-colors duration-300"
                        aria-label={it.ariaLabel}
                      >
                        <motion.span
                          variants={{
                            closed: { y: '140%', rotate: 10 },
                            open: { y: '0%', rotate: 0 }
                          }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          className="inline-block origin-bottom-left"
                        >
                          {it.label}
                        </motion.span>
                      </a>
                    </li>
                  ))}
                </motion.ul>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StaggeredMenu;

