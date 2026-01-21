
import React from 'react';

const SystemSection: React.FC = () => {
  return (
    <section className="py-24" id="system">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">System &gt; Pieces</h2>
          <p className="text-muted text-lg max-w-2xl">You’re not buying “worksheets.” You’re buying a repeatable framework designed for compounding results.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 p-8 rounded-[28px] hover:border-white/20 transition-all">
            <h3 className="text-2xl font-bold mb-4">The System Map</h3>
            <p className="text-muted leading-relaxed mb-8">
              Clear structure. Clean logic. Every resource fits into a bigger method — so results compound over time rather than resetting every lesson.
            </p>
            <ul className="space-y-4">
              {[
                "One structure for planning",
                "One structure for delivery",
                "One structure for tracking progress"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-black/30 border border-gold-500/15 p-8 rounded-[28px] shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <i className="fas fa-microchip text-8xl text-gold-500"></i>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Built for long-term growth</h3>
            <p className="text-muted leading-relaxed mb-8">
              This is why people stay subscribed: it saves time every week and keeps improving as your classroom evolves.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "29", t: "USD / month" },
                { n: "∞", t: "Downloads" },
                { n: "1", t: "System" }
              ].map((kpi, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 border border-white/5 rounded-2xl">
                  <div className="text-3xl font-black text-white">{kpi.n}</div>
                  <div className="text-[10px] uppercase font-bold text-muted/60 mt-1">{kpi.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
