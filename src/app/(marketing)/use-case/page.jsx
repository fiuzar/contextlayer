// app/use-cases/page.tsx
import UseCasesHero from '@/components/layout/use-cases';
import WorkflowSection from '@/components/layout/workflow-section';

export default function UseCasesPage() {
  const cases = [
    {
      number: "01",
      title: "Brand Design & Identity",
      problem: ["AI forgets the brand voice mid-iteration", "Different tools interpret the brand differently", "Naming, tone, and visuals drift apart"],
      usage: ["Define voice and constraints once", "Add references (moodboards, competitor notes)", "Run naming and messaging across models", "Lock context during refinement"],
      outcome: ["Consistent brand outputs", "Faster exploration", "Defensible creative direction"]
    },
    {
      number: "02",
      title: "Landing Page Design",
      problem: ["Tight messaging alignment breaks", "Constant copy re-explaining", "Fragmented sections feel disconnected"],
      usage: ["Set product positioning in context", "Generate hero copy and sub-sections side-by-side", "Compare model interpretations", "Promote the strongest direction"],
      outcome: ["Coherent page structure", "Faster iteration cycles", "Less backtracking"]
    },
    {
      number: "03",
      title: "Concept Exploration",
      problem: ["Early-stage divergence is chaotic", "Resetting tools loses creative direction", "Hard to compare model creativity on one brief"],
      usage: ["Define creative constraints and inspiration", "Ask multiple models to explore directions in parallel", "Select and refine promising concepts"],
      outcome: ["Broader exploration", "Clear decision rationale", "Stronger starting points"]
    }
    // ... add cases 04, 05, 06 using the same pattern
  ];

  return (
    <div className="min-h-screen bg-white">
      <UseCasesHero />
      
      <main>
        {cases.map((c, i) => (
          <WorkflowSection key={i} {...c} isReversed={i % 2 !== 0} />
        ))}

        {/* Why Section */}
        <section className="py-24 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Think in projects, not prompts.</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {["Compare ideas without chaos", "Iterate without losing intent", "Protect your creativity"].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-2xl">
                   <p className="font-bold text-emerald-500">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Design without starting over.</h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            Keep your context. Run multiple models. Iterate with control.
          </p>
          <button className="bg-green-800 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-900 transition shadow-2xl">
            Start a Project
          </button>
        </section>
      </main>
    </div>
  );
}