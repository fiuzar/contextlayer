// components/pricing/PricingFAQ.tsx
export default function PricingFAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-24 text-center md:text-left">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">You’re paying for continuity, not prompts.</h2>
           <p className="text-slate-600 max-w-2xl leading-relaxed">
             ContextLayer isn’t charging you for words generated. It saves re-briefing time, mental overhead, and broken iterations. If AI is part of your daily workflow, ContextLayer pays for itself by removing the friction you already feel.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           {[
             { q: "Do I pay separately for GPT/Claude?", a: "No. Model access is included in the platform subscription." },
             { q: "Are there usage limits?", a: "We use fair-use limits designed for professional design work, not automation/bot usage." },
             { q: "Can I cancel anytime?", a: "Yes. Monthly billing, no lock-in, no questions asked." },
             { q: "Is this replacing ChatGPT?", a: "No. It sits above your favorite tools and makes them work together." }
           ].map((faq) => (
             <div key={faq.q}>
               <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
               <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}