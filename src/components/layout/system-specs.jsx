// components/product/SystemSpecs.tsx
export default function SystemSpecs() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Unified Project Context */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Unified Project Context</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Goal/Statement', 'Brand Voice', 'Target Audience', 'Design Constraints', 'References'].map((field) => (
              <div key={field} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-semibold text-slate-700">
                {field}
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Model Execution */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Model Execution</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Run one prompt across GPT, Claude, and Gemini simultaneously. Choose the strongest direction without retyping a single word.
            </p>
          </div>
          <div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-2 shadow-inner">
             <div className="grid grid-cols-3 gap-2 h-40">
                <div className="bg-slate-50 rounded-lg flex items-center justify-center font-mono text-[10px] text-slate-400">GPT VIEW</div>
                <div className="bg-slate-50 rounded-lg flex items-center justify-center font-mono text-[10px] text-slate-400">CLAUDE VIEW</div>
                <div className="bg-slate-50 rounded-lg flex items-center justify-center font-mono text-[10px] text-slate-400">GEMINI VIEW</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}