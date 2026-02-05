// app/app/project/[id]/exports/page.tsx
import ExportCard from "@/components/app/exxport-card";

export default function ExportsPage() {
  return (
    <div className="flex h-full bg-white">
      {/* LEFT: Export Controls */}
      <div className="w-1/3 border-r border-slate-100 p-8 overflow-y-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Export & Handoff</h2>
        <p className="text-sm text-slate-500 mb-10">Prepare your project context and outputs for external use.</p>

        <div className="space-y-6">
          <section>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Format</label>
            <div className="grid grid-cols-1 gap-3">
              <ExportCard title="Markdown (.md)" desc="Best for Notion or GitHub" icon="📝" active />
              <ExportCard title="Portable PDF" desc="Clean, branded project brief" icon="📄" />
              <ExportCard title="Design Tokens (JSON)" desc="Color & typography variables" icon="🔢" />
            </div>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">Sharing</label>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-slate-700">Public Link</span>
                <div className="w-8 h-4 bg-slate-200 rounded-full relative"><div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" /></div>
              </div>
              <p className="text-xs text-slate-400 mb-3">Allow anyone with the link to view the current context.</p>
              <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition">
                Copy Read-Only Link
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* RIGHT: Live Preview */}
      <div className="flex-1 bg-slate-50 p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl min-h-[800px] p-12 border border-slate-100">
          <div className="flex justify-between items-center mb-12">
            <div className="w-8 h-8 bg-green-800 rounded-lg" />
            <span className="text-[10px] font-bold text-slate-300 uppercase">ContextLayer Project Export</span>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Fintech Branding 2026</h1>
          <p className="text-sm text-slate-400 mb-10">Generated on Feb 5, 2026</p>

          <div className="prose prose-slate prose-sm">
            <h3 className="text-green-800">01. Project Goal</h3>
            <p>Creating a high-end fintech landing page targeting Gen-Z users with a focus on speed and transparency.</p>
            
            <h3 className="text-green-800 mt-8">02. Brand Voice</h3>
            <p>Direct, minimal, zero-jargon. The brand should feel technical but accessible.</p>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-100 flex justify-center">
            <button className="bg-green-800 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-green-900 transition flex items-center gap-2">
              <span>📥</span> Download Markdown
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}