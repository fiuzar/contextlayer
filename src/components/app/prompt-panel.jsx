// components/workspace/PromptPanel.jsx
export default function PromptPanel() {
  return (
    <div className="p-8 flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Active Instruction</h3>
        <textarea 
          className="w-full h-64 text-xl font-medium text-slate-900 placeholder:text-slate-200 border-none focus:ring-0 resize-none p-0"
          placeholder="What are we building today?"
        />
      </div>

      <div className="pt-6 border-t border-slate-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            {['GPT-4', 'Claude 3', 'Gemini'].map(model => (
              <label key={model} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-green-800 focus:ring-green-800" />
                <span className="text-xs font-bold text-slate-500">{model}</span>
              </label>
            ))}
          </div>
          <div className="flex items-center gap-2">
             <span className="text-[10px] font-bold text-slate-400">ITERATION MODE</span>
             <div className="w-8 h-4 bg-slate-200 rounded-full relative"><div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" /></div>
          </div>
        </div>
        
        <button className="w-full bg-green-800 text-white py-4 rounded-2xl font-bold hover:bg-green-900 transition-all shadow-xl shadow-green-800/10">
          Run Multi-Model Execution
        </button>
      </div>
    </div>
  );
}