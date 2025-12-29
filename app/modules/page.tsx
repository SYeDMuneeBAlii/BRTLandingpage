'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ModulesShowcase from '@/components/ModulesShowcase';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function ModulesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar onContactClick={() => setContactModalOpen(true)} />
      <ModulesShowcase />
      <Footer />
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />
    </main>
  );
}

