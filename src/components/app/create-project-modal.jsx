// components/dashboard/CreateProjectModal.jsx
export default function CreateProjectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const templates = [
    { id: 'blank', name: 'Blank Project', desc: 'Start from scratch with a clean slate.', icon: '🌑' },
    { id: 'brand', name: 'Brand Identity', desc: 'Define voice, audience, and visual style.', icon: '🎨' },
    { id: 'landing', name: 'Landing Page', desc: 'Conversion goals and messaging strategy.', icon: '🚀' },
    { id: 'prd', name: 'Product Requirement', desc: 'Features, constraints, and user flows.', icon: '📋' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Initialize Project</h2>
            <p className="text-slate-500 text-sm mt-1">Select a context scaffold to begin.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-xl p-2">✕</button>
        </div>

        {/* Template Grid */}
        <div className="p-8 grid grid-cols-2 gap-4">
          {templates.map((tpl) => (
            <button key={tpl.id} className="text-left p-5 border border-slate-100 rounded-2xl hover:border-green-800 hover:bg-green-50/30 transition-all group">
              <span className="text-2xl mb-3 block">{tpl.icon}</span>
              <h4 className="font-bold text-slate-900 group-hover:text-green-800">{tpl.name}</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{tpl.desc}</p>
            </button>
          ))}
        </div>

        {/* Manual Name Input (Optional for quick start) */}
        <div className="px-8 pb-8">
          <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Or give it a custom name</label>
          <div className="flex gap-3">
            <input 
              type="text" 
              placeholder="e.g. Project Phoenix" 
              className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-800 outline-none transition"
            />
            <button className="bg-green-800 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-green-900 transition shadow-lg shadow-green-800/20">
              Create →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}