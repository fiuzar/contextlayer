// components/homepage/Solution.tsx
export default function Solution() {
  const assets = ["Brand rules", "Target audience", "Visual tone", "Creative constraints", "References and inspiration"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-widest mb-6">
              The Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Your brief is not a prompt. <br />It’s an asset.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              ContextLayer treats your design context like source files. You define them once. They follow every AI interaction automatically.
            </p>
            <div className="flex flex-wrap gap-3">
              {assets.map((asset) => (
                <span key={asset} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-700">
                  {asset}
                </span>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             <div className="w-full max-w-sm aspect-square bg-slate-50 rounded-3xl border border-slate-200 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 bg-green-800 rounded-2xl shadow-xl flex items-center justify-center text-white text-4xl">C</div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">⚓</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}