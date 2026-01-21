
import React from 'react';

interface VaultSectionProps {
  onOpenAssistant: () => void;
}

const VaultSection: React.FC<VaultSectionProps> = ({ onOpenAssistant }) => {
  const cards = [
    { t: "SEL & Behavior Systems", s: "Protocols, scripts, and routines that work.", icon: "fa-users" },
    { t: "Critical Thinking", s: "Reasoning frameworks + printable tools.", icon: "fa-brain" },
    { t: "Reading & Writing", s: "Skill ladders + instruction flow.", icon: "fa-pen-nib" },
    { t: "Math & Logic", s: "Structured practice + mastery tracking.", icon: "fa-calculator" },
    { t: "Teacher Operating System", s: "Planning, pacing, and classroom structure.", icon: "fa-sliders" },
    { t: "Monthly New Drops", s: "New resources added regularly.", icon: "fa-sparkles" }
  ];

  return (
    <section className="py-24 bg-white/[0.03] border-y border-white/5" id="vault">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">The Vault</h2>
            <p className="text-muted text-lg max-w-xl">A library designed for instant use. No hunting. No clutter. Just pure educational utility.</p>
          </div>
          <button 
            onClick={onOpenAssistant}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-gold-500/30 rounded-full hover:bg-gold-500/10 transition-all text-sm font-bold group"
          >
            <i className="fas fa-wand-magic-sparkles text-gold-100 group-hover:scale-125 transition-transform"></i>
            Ask Smart Assistant
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="group p-8 rounded-[28px] bg-black/30 border border-white/10 hover:border-gold-500/40 transition-all duration-500 shadow-xl relative overflow-hidden">
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-colors">
                <i className={`fas ${card.icon} text-xl text-gold-100`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-gold-100 transition-colors">{card.t}</h3>
              <p className="text-muted text-sm leading-relaxed">{card.s}</p>
              
              <div className="mt-8 flex items-center text-[10px] font-black tracking-widest uppercase text-muted/40 group-hover:text-gold-500 transition-colors">
                Explore Module <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaultSection;
