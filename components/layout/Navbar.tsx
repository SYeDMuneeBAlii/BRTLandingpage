'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import StaggeredMenu from '@/components/ui/StaggeredMenu';

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

  const menuItems: import('@/components/ui/StaggeredMenu').StaggeredMenuItem[] = navLinks.map((link) => ({
    label: link.name,
    ariaLabel: `Go to ${link.name}`,
    link: getLinkHref(link),
  }));

  // Add Contact as a menu item
  menuItems.push({
    label: 'Contact',
    ariaLabel: 'Open contact modal',
    link: '#',
    onClick: onContactClick,
  });

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#00f2ff', '#0088ff']}
      accentColor="#00f2ff"
      isFixed={true}
      scrolled={scrolled}
      onContactClick={onContactClick}
    />
  );
}
