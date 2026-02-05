// components/product/CoreConcept.tsx
export default function CoreConcept() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-green-800 mb-4">The Core Concept</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Design context should behave like source files</h3>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Designers don’t start every task from zero. ContextLayer turns your brief into a living asset that automatically attaches to every prompt and stays consistent across models.
            </p>
            <ul className="space-y-4">
              {['Automatically attaches', 'Survives iteration', 'Stays consistent'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-900 font-medium">
                  <span className="text-emerald-500 font-bold">→</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
             <div className="font-mono text-xs text-slate-500 mb-4 uppercase">Project_Context.config</div>
             <div className="space-y-2 opacity-80">
                <div className="h-2 bg-slate-700 rounded w-3/4" />
                <div className="h-2 bg-slate-700 rounded w-1/2" />
                <div className="h-2 bg-green-800 rounded w-full" />
                <div className="h-2 bg-slate-700 rounded w-2/3" />
             </div>
             <div className="mt-8 pt-8 border-t border-slate-800 grid grid-cols-3 gap-4 text-[10px] font-mono uppercase text-slate-400">
                <div className="border border-slate-700 p-2 rounded">GPT-4</div>
                <div className="border border-slate-700 p-2 rounded">CLAUDE 3</div>
                <div className="border border-slate-700 p-2 rounded">GEMINI 1.5</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}