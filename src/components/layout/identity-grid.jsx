// components/about/IdentityGrid.tsx
export default function IdentityGrid() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h4 className="text-emerald-500 font-bold uppercase text-xs tracking-widest mb-8">What ContextLayer Is</h4>
            <ul className="space-y-6">
              <li>
                <p className="font-bold text-lg">A project-based AI workspace</p>
                <p className="text-sm text-slate-400">Structured for work that spans weeks, not seconds.</p>
              </li>
              <li className="font-bold text-lg">A control layer for multi-model workflows</li>
              <li className="font-bold text-lg">A system for preserving creative intent</li>
            </ul>
          </div>
          <div className="opacity-40">
            <h4 className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-8">What It Is Not</h4>
            <ul className="space-y-6 text-slate-300">
              <li className="font-bold text-lg">A new AI model</li>
              <li className="font-bold text-lg">A chat replacement</li>
              <li className="font-bold text-lg">A prompt marketplace</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}