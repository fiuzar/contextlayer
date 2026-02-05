// components/homepage/CTA.tsx
export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-green-800 rounded-3xl overflow-hidden px-8 py-16 md:px-16 md:py-20 text-center text-white">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Stop re-explaining your design thinking.
            </h2>
            <p className="text-green-100 text-lg mb-10 opacity-80">
              Keep context. Compare models. Iterate with control.
            </p>
            <button className="bg-white text-green-800 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition shadow-2xl">
              Start Your First Project
            </button>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-400/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}