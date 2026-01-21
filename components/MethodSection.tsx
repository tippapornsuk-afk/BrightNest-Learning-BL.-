
import React from 'react';

const MethodSection: React.FC = () => {
  return (
    <section className="py-24" id="method">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">How it works</h2>
          <p className="text-muted text-lg">Three steps. No confusion. No friction.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { n: 1, t: "Subscribe", s: "Pay $29/month with card securely via Stripe." },
            { n: 2, t: "Unlock the Vault", s: "Instant access to all frameworks and the AI curriculum assistant." },
            { n: 3, t: "Download & Use", s: "Unlimited downloads anytime. New systems drop every 30 days." }
          ].map((step) => (
            <div key={step.n} className="p-8 bg-white/5 border border-white/10 rounded-[28px] relative group">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-100 font-black text-xl mb-6 group-hover:scale-110 transition-transform">
                {step.n}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.t}</h3>
              <p className="text-muted leading-relaxed">{step.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
