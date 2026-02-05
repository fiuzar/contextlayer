// components/shared/TopNav.jsx
export default function TopNav() {
  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        {/* Breadcrumb / Project Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-sm">Projects</span>
          <span className="text-slate-300">/</span>
          <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-slate-50 transition text-slate-900 font-semibold text-sm">
            Fintech Landing Page
            <span className="text-[10px] text-slate-400 mt-0.5">▼</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Global Action Button */}
        <button className="bg-green-800 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-green-900 transition">
          + New Project
        </button>
        
        {/* Connection Status (Subtle) */}
        <div className="flex items-center gap-2 px-3 py-1 border border-slate-100 rounded-full">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Models Ready</span>
        </div>
      </div>
    </header>
  );
}