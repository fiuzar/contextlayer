// components/dashboard/ProjectCard.tsx
export default function ProjectCard({ project }) {
  return (
    <a href={`/app/project/${project.id}/workspace`} className="group">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-green-800 transition-all h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100 group-hover:bg-green-50">
            <span className="text-lg">📄</span>
          </div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.updated}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-800 transition-colors">
          {project.name}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center gap-2">
          <span className="px-2 py-1 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-tight">
            {project.template}
          </span>
          {/* Subtle status dots for GPT, Claude, Gemini availability */}
          <div className="ml-auto flex gap-1">
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
            <div className="w-1 h-1 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </a>
  );
}