// components/workspace/ContextPanel.jsx
export default function ContextPanel() {
  return (
    <aside className="w-80 border-r border-slate-200 flex flex-col h-full bg-white">
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Context</span>
        <button className="flex items-center gap-2 px-2 py-1 bg-green-800 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="text-[10px] font-bold text-white pr-1">LOCKED</span>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Brand Voice</label>
          <textarea className="w-full text-sm text-slate-700 bg-transparent border-none focus:ring-0 p-0 resize-none h-24" 
            placeholder="Describe the tone..." defaultValue="Minimalist, technical but accessible, premium but not elitist." />
        </div>
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">Constraints</label>
          <ul className="text-sm text-slate-600 space-y-2">
            <li className="flex gap-2"><span>•</span> Max 3 colors</li>
            <li className="flex gap-2"><span>•</span> No serif fonts</li>
          </ul>
        </div>
      </div>
    </aside>
  );
}