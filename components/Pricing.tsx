
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-stretch">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6">One Plan. <br />Full Access.</h2>
            <p className="text-muted text-lg mb-10 max-w-md">No tiers. No confusion. One simple subscription that unlocks every single resource and feature.</p>
            <ul className="space-y-5">
              {[
                "Unlimited downloads of all PDFs & resources",
                "Full access to the Framework Library",
                "New curriculum drops every month",
                "AI-powered Smart Assistant usage",
                "Cancel anytime with one click"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-textMain/90">
                  <i className="fas fa-check-circle text-gold-100"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 bg-black/40 border border-gold-500/30 rounded-[32px] shadow-2xl backdrop-blur-xl relative overflow-hidden flex flex-col items-center justify-center text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            
            <div className="text-6xl font-black mb-2">$29<span className="text-lg font-bold text-muted ml-2">/month</span></div>
            <p className="text-muted text-sm mb-10">All-inclusive. Professional access.</p>
            
            <a 
              href="#checkout" 
              className="w-full py-5 bg-radial-gold border border-gold-100/50 rounded-full font-black text-xl hover:-translate-y-1 transition-all shadow-xl gold-glow mb-4"
            >
              Subscribe & Unlock
            </a>
            <p className="text-xs text-muted/50">SECURE PAYMENT • CANCEL ANYTIME</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
