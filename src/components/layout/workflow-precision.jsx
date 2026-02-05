// components/product/WorkflowPrecision.tsx
export default function WorkflowPrecision() {
  const steps = [
    { title: "Context Lock", desc: "Freezes the project brief. Prevents accidental changes. Ensures outputs stay aligned." },
    { title: "Iteration Mode", desc: "Builds on previous outputs. Reference a selected 'best' result to keep direction intact." },
    { title: "Project History", desc: "A chronological record of context changes, prompts, and promotions. Rewind at any time." },
    { title: "Export & Handoff", desc: "Clean Markdown, PDF, or structured blocks for design tools. No data traps." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-12">Designed for precision iteration</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-800 transition">
                <span className="text-slate-400 group-hover:text-white">→</span>
              </div>
              <h4 className="font-bold text-slate-900 mb-3">{step.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}