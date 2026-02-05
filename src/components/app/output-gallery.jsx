// components/workspace/OutputGallery.jsx
export default function OutputGallery() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Model Outputs</h3>
        <button className="text-[10px] font-bold text-green-800 hover:underline">CLEAR ALL</button>
      </div>

      {/* Model Result Card */}
      {['GPT-4', 'Claude 3'].map(model => (
        <div key={model} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-green-800 transition-all group">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-black text-slate-900 uppercase tracking-tighter bg-slate-100 px-2 py-1 rounded">{model}</span>
            <button className="opacity-0 group-hover:opacity-100 bg-green-50 text-green-800 text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all border border-green-100">
              PROMOTE TO CONTEXT
            </button>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed italic">
            &ldquo;Based on your fintech brand rules, here are the hero headlines that focus on speed and transparency...&ldquo;
          </p>
        </div>
      ))}
    </div>
  );
}