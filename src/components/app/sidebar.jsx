// components/shared/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-20 bg-green-800 flex flex-col items-center py-6 justify-between h-full">
      <div className="flex flex-col items-center gap-8 w-full">
        {/* Logo Icon */}
        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-xl border border-white/20">
          C
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col gap-6 w-full items-center">
          <SidebarIcon icon="🏠" label="Dashboard" active />
          <SidebarIcon icon="📂" label="Projects" />
          <SidebarIcon icon="🧩" label="Templates" />
        </nav>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-6 items-center">
        <SidebarIcon icon="⚙️" label="Settings" />
        <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-green-700 overflow-hidden">
          {/* User Avatar */}
        </div>
      </div>
    </aside>
  );
}

function SidebarIcon({ icon, label, active = false }) {
  return (
    <div className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all cursor-pointer ${active ? 'bg-white/20 text-white' : 'text-green-100 hover:bg-white/10'}`}>
      <span className="text-xl">{icon}</span>
      {/* Tooltip */}
      <span className="absolute left-16 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
        {label}
      </span>
    </div>
  );
}