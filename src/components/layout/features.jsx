// components/homepage/Features.tsx
export default function Features() {
  const features = [
    { title: "Persistent Project Context", desc: "Your brief stays attached—always. Every prompt inherits the same logic automatically." },
    { title: "Side-by-Side Comparison", desc: "Compare tone, structure, and creativity across models without retyping anything." },
    { title: "Context Lock", desc: "Lock the brief when you’re refining details. No accidental drift. No off-brand outputs." },
    { title: "Output Promotion", desc: "Good ideas don’t disappear. Promote an output and build on it." },
    { title: "Visual + Text Workflows", desc: "Use the same context for copy, concepts, visual directions, and image generation." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-16">Built for the way you work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-2xl hover:border-green-800/30 transition shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}