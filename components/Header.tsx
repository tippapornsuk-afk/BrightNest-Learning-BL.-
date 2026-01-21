
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-bg/65 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center border border-gold-500/40">
            <i className="fas fa-nesting-doll text-gold-100"></i>
          </div>
          <div>
            <div className="font-[900] tracking-tight text-textMain leading-none">BrightNest Learning</div>
            <div className="text-[10px] text-muted tracking-[0.2em] mt-1 font-bold uppercase">System • Vault • Method</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted">
          <a href="#system" className="hover:text-textMain transition-colors">System</a>
          <a href="#vault" className="hover:text-textMain transition-colors">Vault</a>
          <a href="#method" className="hover:text-textMain transition-colors">Method</a>
          <a href="#faq" className="hover:text-textMain transition-colors">FAQ</a>
        </nav>

        <a 
          href="#pricing" 
          className="px-5 py-2.5 bg-radial-gold border border-gold-100/40 rounded-full font-bold text-sm shadow-md hover:bg-gold-500/30 transition-all"
        >
          Get Full Access
        </a>
      </div>
    </header>
  );
};

export default Header;
