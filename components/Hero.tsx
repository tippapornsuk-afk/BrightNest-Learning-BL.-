
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden py-12 md:py-24">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center grayscale opacity-20 pointer-events-none" 
        style={{ backgroundImage: `url('https://picsum.photos/id/1/1920/1080')` }}
      />
      <div className="absolute inset-0 hero-gradient pointer-events-none" />

      <div className="max-w-[1120px] mx-auto px-4 relative z-10 grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-black/40 border border-gold-500/30 rounded-full text-gold-100 text-[11px] font-black tracking-widest uppercase backdrop-blur-md">
            ONE SUBSCRIPTION • UNLIMITED DOWNLOADS
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl">
            A Complete <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-500">Learning System</span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-xl">
            Frameworks, methods, and professional resources — unlocked for <b className="text-white">$29/month</b>.
            Built for educators who think in systems, not shortcuts.
          </p>

          <div className="space-y-4">
            <a 
              href="#pricing" 
              className="inline-block px-10 py-5 bg-radial-gold border border-gold-100/50 rounded-full font-black text-xl hover:-translate-y-1 transition-all duration-300 shadow-2xl gold-glow"
            >
              Get Full Access — $29/month
            </a>
            <p className="text-xs text-muted/60 flex items-center gap-2">
              <i className="fas fa-lock text-gold-500"></i>
              Card payment • Cancel anytime • Instant access
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Built to scale classrooms", "Professional-grade system", "New drops monthly"].map((text) => (
              <span key={text} className="px-4 py-2 border border-white/10 rounded-full bg-black/20 text-xs text-muted/80 backdrop-blur-sm">
                ✓ {text}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-black/40 border border-white/10 rounded-[32px] p-6 shadow-2xl backdrop-blur-xl">
          <div className="text-gold-100/90 font-black tracking-widest text-xs uppercase mb-6">What you unlock</div>
          <div className="space-y-4">
            {[
              { t: "System Frameworks", s: "Step-by-step structures that work." },
              { t: "ProVault Library", s: "Ready-to-use resources & tools." },
              { t: "Full Access", s: "Unlimited downloads — one plan." }
            ].map((item, i) => (
              <div key={i} className="glass p-5 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                <h4 className="font-bold text-white text-lg mb-1">{item.t}</h4>
                <p className="text-muted text-sm leading-relaxed">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
