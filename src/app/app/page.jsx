// app/app/dashboard/page.tsx
import ProjectCard from "@/components/app/project-card"
import CreateProjectButton from "@/components/dashboard/CreateProjectButton";

export default function Dashboard() {
  // Mock data for the visual design
  const projects = [
    { id: '1', name: 'Fintech Branding 2026', template: 'Brand Identity', updated: '2h ago' },
    { id: '2', name: 'SaaS Landing Page', template: 'Landing Page', updated: 'Yesterday' },
    { id: '3', name: 'PRD: Project Phoenix', template: 'Product Strategy', updated: '3 days ago' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-12">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Projects</h1>
          <p className="text-slate-500 mt-2">Manage your persistent design contexts.</p>
        </div>
        <CreateProjectButton />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* The "New Project" Empty State Card */}
        <div className="border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 hover:border-green-800 transition-colors cursor-pointer group">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-green-800 group-hover:text-white transition-all mb-4 text-2xl">
            +
          </div>
          <p className="font-bold text-slate-900">New Project</p>
          <p className="text-sm text-slate-400">Start from a template or blank</p>
        </div>

        {/* List of active projects */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}