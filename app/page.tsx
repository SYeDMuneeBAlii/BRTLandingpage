'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import StoryOpening from '@/components/story/StoryOpening';
import StoryChallenge from '@/components/story/StoryChallenge';
import StoryJourney from '@/components/story/StoryJourney';
import HorizontalGallery from '@/components/gallery/HorizontalGallery';
import ModulesShowcase from '@/components/modules/ModulesShowcase';
import StorySolution from '@/components/story/StorySolution';
import StoryImpact from '@/components/story/StoryImpact';
import StoryFuture from '@/components/story/StoryFuture';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import ContactModal from '@/components/contact/ContactModal';

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar onContactClick={() => setContactModalOpen(true)} />
      
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
      />

      <StoryOpening />
      <StoryChallenge />
      <StoryJourney />
      <HorizontalGallery />
      <ModulesShowcase />
      <StorySolution />
      <StoryImpact />
      <StoryFuture />
      <Footer />
      <BackToTop />
    </main>
  );
}
