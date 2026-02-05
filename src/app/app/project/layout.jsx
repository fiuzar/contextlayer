// app/app/project/[id]/layout.jsx
import ProjectSidebar from "@/components/app/project-sidebar"

export default function ProjectLayout({ children, params }) {
  return (
    <div className="flex h-full">
      {/* Secondary Sidebar (Specific to the active Project) */}
      {/* <ProjectSidebar projectId={params.id} /> */}
      
      {/* The Workspace/History/Export content */}
      <div className="flex-1 overflow-hidden h-full">
        {children}
      </div>
    </div>
  );
}