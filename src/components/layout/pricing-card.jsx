// components/pricing/PricingCards.tsx
export default function PricingCards() {
  const tiers = [
    {
      name: "Core",
      price: "30",
      description: "Best for independent designers and solo creators using AI daily.",
      features: ["Unlimited projects", "Unified project context", "Multi-model execution", "Side-by-side comparison", "Context lock & iteration", "Export to Markdown & PDF"],
      cta: "Start with Core",
      highlight: false
    },
    {
      name: "Pro",
      price: "50",
      description: "Best for designers and agencies managing multiple clients.",
      features: ["Everything in Core", "Priority model execution", "Higher usage limits", "Advanced context versioning", "Manual concierge support", "Early access to new features"],
      cta: "Upgrade to Pro",
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {tiers.map((tier) => (
          <div key={tier.name} className={`relative p-8 rounded-3xl border ${tier.highlight ? 'border-green-800 shadow-2xl ring-1 ring-green-800' : 'border-slate-200'} flex flex-col`}>
            {tier.highlight && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-800 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Agency Choice
              </span>
            )}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{tier.description}</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-bold text-slate-900">${tier.price}</span>
              <span className="text-slate-400 font-medium ml-2">/ month</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <span className="text-emerald-600 text-xs font-bold">✓</span>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.highlight ? 'bg-green-800 text-white hover:bg-green-900' : 'bg-slate-900 text-white hover:bg-black'}`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}