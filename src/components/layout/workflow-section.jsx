// components/use-cases/WorkflowSection.tsx

export default function WorkflowSection({ number, title, problem, usage, outcome, isReversed }) {
  return (
    <section className={`py-24 border-b border-slate-100 ${isReversed ? 'bg-slate-50/50' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`flex flex-col lg:flex-row gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Problem & Title */}
          <div className="lg:w-1/2">
            <span className="font-mono text-sm font-bold text-green-800 mb-4 block uppercase tracking-widest">{number}</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">{title}</h2>
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">The Problem</h4>
              <ul className="space-y-3">
                {problem.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm opacity-90">
                    <span className="text-red-400">✕</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Usage & Outcome */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h4 className="text-xs font-bold uppercase tracking-widest text-green-800 mb-6">How designers use ContextLayer</h4>
            <ul className="space-y-4 mb-10">
              {usage.map((u, i) => (
                <li key={i} className="flex gap-4 items-start text-slate-700 leading-relaxed">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <p>{u}</p>
                </li>
              ))}
            </ul>
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Outcome</h4>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {outcome.map((o, i) => (
                  <span key={i} className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-emerald-600">✓</span> {o}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}