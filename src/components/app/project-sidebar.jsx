// components/shared/ProjectSidebar.jsx
export default function ProjectSidebar({ projectId }) {
  const menuItems = [
    { label: 'Workspace', icon: '✍️', path: 'workspace' },
    { label: 'History', icon: '🕒', path: 'history' },
    { label: 'Exports', icon: '📤', path: 'exports' },
    { label: 'Settings', icon: '⚙️', path: 'settings' },
  ];

  return (
    <aside className="w-64 border-r border-slate-200 bg-white h-full flex flex-col">
      {/* Project Title Header */}
      <div className="p-6 border-b border-slate-50">
        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Active Project</h2>
        <p className="text-sm font-bold text-slate-900 truncate">Fintech Branding 2026</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={`/app/project/${projectId}/${item.path}`}
            className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-green-800 transition-colors group"
          >
            <span className="text-lg opacity-70 group-hover:opacity-100">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* Project Status Indicator */}
      <div className="p-4 mt-auto">
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Current Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-slate-700">Context Locked</span>
          </div>
        </div>
      </div>
    </aside>
  );
}