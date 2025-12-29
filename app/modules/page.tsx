import Navbar from '@/components/Navbar';
import ModulesShowcase from '@/components/ModulesShowcase';
import Footer from '@/components/Footer';

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <ModulesShowcase />
      <Footer />
    </main>
  );
}

