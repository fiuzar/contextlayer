// components/homepage/Problem.tsx
export default function Problem() {
  const painPoints = [
    "You explain the brand voice in ChatGPT",
    "Claude gives a better structure, but you retype everything",
    "Gemini interprets the brief differently",
    "Midway through iteration, the original intent is gone"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AI forgets what designers can’t afford to.
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Design work depends on continuity. AI tools are built for single prompts. 
            <span className="text-emerald-500 font-medium"> ContextLayer exists because copying the same brief five times is not a workflow.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition hover:border-green-800/50">
                <div className="w-6 h-6 rounded-full bg-red-900/30 text-red-400 flex items-center justify-center mr-4 text-xs">✕</div>
                <p className="text-slate-300 text-sm">{point}</p>
              </div>
            ))}
          </div>
          <div className="relative hidden md:block">
             <div className="absolute inset-0 bg-green-800/20 blur-3xl rounded-full" />
             <div className="relative bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                  <div className="w-3 h-3 rounded-full bg-slate-600" />
                </div>
                <p className="font-mono text-xs text-slate-500 leading-relaxed italic">
                  {/* // The typical fragmented workflow <br /> */}
                  [Prompt] -&gt; [Output] -&gt; [Copy] -&gt; [New Tab] -&gt; [Paste] -&gt; [Re-explain Context] ...
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}