// components/pricing/PricingHero.tsx
export default function PricingHero() {
  return (
    <section className="pt-32 pb-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Pricing that respects creative flow
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          No tokens. No usage math. Just clear monthly access to persistent context and multi-model workflows.
        </p>
      </div>
    </section>
  );
}