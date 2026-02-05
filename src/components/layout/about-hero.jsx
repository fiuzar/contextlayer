// components/about/AboutHero.tsx
export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
          Design work depends on continuity. <br />
          <span className="text-green-800">Most AI tools don’t.</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-12 text-lg text-slate-600 leading-relaxed">
          <div>
            <p className="mb-6 font-bold text-slate-900">Designers think in:</p>
            <ul className="space-y-2 border-l-2 border-emerald-500 pl-6">
              <li>Briefs</li>
              <li>Constraints</li>
              <li>References</li>
              <li>Iteration</li>
            </ul>
          </div>
          <div className="flex flex-col justify-end">
            <p className="mb-4">AI tools think in isolated prompts.</p>
            <p className="font-bold text-green-800">ContextLayer exists to close that gap.</p>
          </div>
        </div>
      </div>
    </section>
  );
}