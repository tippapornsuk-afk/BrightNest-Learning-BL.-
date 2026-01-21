
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemSection from './components/SystemSection';
import VaultSection from './components/VaultSection';
import MethodSection from './components/MethodSection';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AssistantModal from './components/AssistantModal';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg selection:bg-gold-500 selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <SystemSection />
        <VaultSection onOpenAssistant={() => setIsAssistantOpen(true)} />
        <MethodSection />
        <Testimonials />
        <Pricing />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-14 border-t border-white/5 bg-gradient-to-b from-white/5 to-transparent">
          <div className="max-w-[1120px] mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-black/40 border border-gold-500/20 rounded-3xl shadow-2xl backdrop-blur-md">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-extrabold mb-2">Unlock the Vault</h2>
                <p className="text-muted text-lg">One system. Lifetime momentum. $29/month.</p>
              </div>
              <a 
                href="#checkout" 
                className="px-8 py-4 bg-radial-gold border border-gold-100/50 rounded-full font-bold text-lg hover:-translate-y-1 transition-all duration-300 shadow-lg text-center"
              >
                Get Full Access — $29/month
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {isAssistantOpen && (
        <AssistantModal onClose={() => setIsAssistantOpen(false)} />
      )}
    </div>
  );
};

export default App;
