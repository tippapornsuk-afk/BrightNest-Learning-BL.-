
import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.03] border-t border-white/5" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">FAQ</h2>
          <p className="text-muted text-lg">Answer fast. No fluff.</p>
        </div>

        <div className="space-y-4">
          {[
            { q: "What do I get for $29/month?", a: "Full access to the entire vault library, all downloadable systems, and unlimited usage of our smart assistant." },
            { q: "Can I cancel anytime?", a: "Yes. You can manage your subscription easily via your member dashboard. No questions asked." },
            { q: "Is this for teachers only?", a: "While built for professional educators, many homeschool parents and tutors find our frameworks invaluable." },
            { q: "Are the resources editable?", a: "Most frameworks come as PDFs, while our planning templates are provided in editable formats (Google Docs/Sheets)." }
          ].map((item, i) => (
            <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all">
              <summary className="p-6 font-bold flex items-center justify-between list-none">
                {item.q}
                <i className="fas fa-plus text-gold-500 group-open:rotate-45 transition-transform"></i>
              </summary>
              <div className="px-6 pb-6 text-muted leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
