// components/exports/ExportCard.jsx
export default function ExportCard({ title, desc, icon, active = false }) {
  return (
    <button className={`w-full text-left p-4 rounded-2xl border transition-all ${active ? 'border-green-800 bg-green-50/50 ring-1 ring-green-800' : 'border-slate-100 bg-white hover:border-slate-300'}`}>
      <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <div>
          <h4 className={`text-sm font-bold ${active ? 'text-green-900' : 'text-slate-900'}`}>{title}</h4>
          <p className="text-[11px] text-slate-500">{desc}</p>
        </div>
      </div>
    </button>
  );
}