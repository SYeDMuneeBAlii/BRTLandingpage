'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import StoryOpening from '@/components/StoryOpening';
import StoryChallenge from '@/components/StoryChallenge';
import StoryJourney from '@/components/StoryJourney';
import HorizontalGallery from '@/components/HorizontalGallery';
import ModulesShowcase from '@/components/ModulesShowcase';
import StorySolution from '@/components/StorySolution';
import StoryImpact from '@/components/StoryImpact';
import StoryFuture from '@/components/StoryFuture';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CursorFollower from '@/components/CursorFollower';
import ContactModal from '@/components/ContactModal';

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
      <CursorFollower />
    </main>
  );
}
