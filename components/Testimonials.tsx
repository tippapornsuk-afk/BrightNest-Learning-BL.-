
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.03] border-y border-white/5">
      <div className="max-w-[1120px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">What subscribers say</h2>
          <p className="text-muted text-lg">Trusted by educators across 400+ school districts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { q: "“This is the first resource library that actually feels like a cohesive system. It changed my Sunday planning.”", a: "Classroom Teacher" },
            { q: "“Everything connects. I stopped wasting time searching for random worksheets. The Logic Vault is a goldmine.”", a: "Instructional Coach" },
            { q: "“Worth it on week one. We use the SEL framework across our entire secondary department now.”", a: "School Leader" }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-black/30 border border-gold-500/10 rounded-[28px] shadow-lg">
              <p className="text-textMain/90 text-lg leading-relaxed mb-6 italic">{item.q}</p>
              <div className="text-xs font-bold uppercase tracking-widest text-gold-500">— {item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
