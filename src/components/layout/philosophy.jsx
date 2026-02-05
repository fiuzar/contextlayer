// components/about/Philosophy.tsx
export default function Philosophy() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-green-800 mb-8">Product Philosophy</h2>
        <div className="bg-green-800 rounded-3xl p-10 md:p-16 text-white mb-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Context is an asset, not input.</h3>
          <p className="text-xl text-green-100 opacity-90 leading-relaxed">
            Project context should behave like source files, not disposable prompts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            { t: "Context is persistent", d: "No more scrolling back through chat history to find your brand rules." },
            { t: "Context is editable & versioned", d: "Change your intent intentionally, and see how it evolves." },
            { t: "Context applies consistently", d: "One source of truth across GPT, Claude, and Gemini." },
            { t: "Context can be locked", d: "Precision matters when you move from exploration to refinement." }
          ].map((item) => (
            <div key={item.t}>
              <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}