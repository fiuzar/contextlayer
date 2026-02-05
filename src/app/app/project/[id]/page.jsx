// app/app/project/[id]/workspace/page.tsx
import ContextPanel from "@/components/app/context-panel";
import PromptPanel from "@/components/app/prompt-panel";
import OutputGallery from "@/components/app/output-gallery";

export default function WorkspacePage() {
  return (
    <div className="flex h-full overflow-hidden bg-white">
      {/* PANEL 1: THE BRIEF (Left) - Fixed Width */}
      <ContextPanel />

      {/* PANEL 2: THE ACTION (Center) - Fluid */}
      <div className="flex-1 flex flex-col border-r border-slate-100 min-w-100">
        <PromptPanel />
      </div>

      {/* PANEL 3: THE COMPARISON (Right) - Fluid */}
      <div className="flex-1 bg-slate-50/50 overflow-y-auto">
        <OutputGallery />
      </div>
    </div>
  );
}