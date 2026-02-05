// components/product/ProductHero.tsx
export default function ProductHero() {
  return (
    <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            A persistent design <br />workspace for AI
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            ContextLayer keeps your design brief, brand rules, and creative intent attached while you work across GPT, Claude, and Gemini.
          </p>
          <div className="inline-flex items-center gap-3 p-4 bg-green-800/5 border border-green-800/10 rounded-xl">
             <div className="w-2 h-2 rounded-full bg-green-800 animate-pulse" />
             <p className="text-sm font-medium text-green-800">
               Not a chat replacement. The missing layer for real design work.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}