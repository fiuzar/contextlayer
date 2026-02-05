// app/app/project/[id]/history/page.tsx
export default function HistoryPage() {
  const versions = [
    { id: 1, time: '2:45 PM', event: 'Promoted Claude Output', user: 'You' },
    { id: 2, time: '11:20 AM', event: 'Updated Brand Constraints', user: 'You' },
    { id: 3, time: 'Yesterday', event: 'Project Initialized', user: 'System' },
  ];

  return (
    <div className="flex h-full bg-white">
      {/* LEFT: The Timeline */}
      <aside className="w-72 border-r border-slate-100 flex flex-col">
        <div className="p-6 border-b border-slate-50">
          <h2 className="text-lg font-bold text-slate-900">Version History</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {versions.map((v) => (
            <button key={v.id} className="w-full text-left p-4 rounded-2xl hover:bg-slate-50 transition group border border-transparent hover:border-slate-100">
              <p className="text-[10px] font-bold text-green-800 uppercase mb-1">{v.time}</p>
              <p className="text-sm font-bold text-slate-900">{v.event}</p>
              <p className="text-xs text-slate-400 mt-1">by {v.user}</p>
            </button>
          ))}
        </div>
      </aside>

      {/* RIGHT: The Preview Stage */}
      <main className="flex-1 bg-slate-50 p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-slate-500 italic text-center w-full">Viewing state from today at 2:45 PM</span>
          </div>

          <div className="bg-white rounded-[32px] p-10 shadow-sm border border-slate-200 opacity-60 pointer-events-none">
            {/* A "Ghost" version of the Context Panel */}
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Context State</h3>
            <div className="space-y-4 text-slate-600">
              <p className="font-bold text-slate-900">Brand Voice:</p>
              <p className="text-sm">Technical, minimal, and focused on Gen-Z speed.</p>
            </div>
          </div>

          <div className="flex justify-center pt-8">
            <button className="bg-green-800 text-white px-10 py-4 rounded-2xl font-bold shadow-xl hover:bg-green-900 transition">
              Restore this version
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}