// components/product/Positioning.tsx
export default function Positioning() {
  return (
    <>
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What ContextLayer is (and isn’t)</h2>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
               <h4 className="text-emerald-500 font-bold mb-4">ContextLayer Is:</h4>
               <ul className="space-y-3 opacity-80 text-sm">
                  <li>• A project-based AI workspace</li>
                  <li>• A control layer for multi-model workflows</li>
                  <li>• A system for preserving creative intent</li>
               </ul>
            </div>
            <div className="opacity-50">
               <h4 className="text-slate-400 font-bold mb-4">ContextLayer Is Not:</h4>
               <ul className="space-y-3 text-sm">
                  <li>• A new AI model</li>
                  <li>• A chat replacement</li>
                  <li>• A prompt marketplace</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Keep your design thinking intact.</h2>
        <p className="text-slate-500 mb-10">Continuity, comparison, and control—without changing your tools.</p>
        <button className="bg-green-800 text-white px-10 py-4 rounded-xl font-bold hover:bg-green-900 transition shadow-xl">
          Create Your First Project
        </button>
      </section>
    </>
  );
}