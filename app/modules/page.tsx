'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import ModulesShowcase from '@/components/modules/ModulesShowcase';
import Footer from '@/components/layout/Footer';
import ContactModal from '@/components/contact/ContactModal';

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

