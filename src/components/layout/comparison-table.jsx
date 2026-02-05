// components/pricing/ComparisonTable.tsx
export default function ComparisonTable() {
  const rows = [
    { label: "Unlimited projects", core: true, pro: true },
    { label: "Persistent context", core: true, pro: true },
    { label: "Multi-model execution", core: true, pro: true },
    { label: "Side-by-side comparison", core: true, pro: true },
    { label: "Context lock & iteration", core: true, pro: true },
    { label: "Output promotion", core: true, pro: true },
    { label: "History & rewind", core: true, pro: true },
    { label: "Export & sharing", core: true, pro: true },
    { label: "Priority execution", core: false, pro: true },
    { label: "Concierge support", core: false, pro: true },
    { label: "Early feature access", core: false, pro: true },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-12 text-center">Compare features</h2>
        <div className="overflow-hidden border border-slate-200 rounded-2xl bg-white shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Feature</th>
                <th className="p-6 text-sm font-bold text-slate-900">Core ($30)</th>
                <th className="p-6 text-sm font-bold text-slate-900 text-green-800">Pro ($50)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.label} className="hover:bg-slate-50/50 transition">
                  <td className="p-6 text-sm font-medium text-slate-700">{row.label}</td>
                  <td className="p-6 text-center md:text-left">{row.core ? <span className="text-emerald-500">✓</span> : <span className="text-slate-300">—</span>}</td>
                  <td className="p-6 text-center md:text-left">{row.pro ? <span className="text-green-800 font-bold">✓</span> : <span className="text-slate-300">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}