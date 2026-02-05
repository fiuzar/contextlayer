// app/app/settings/page.tsx
export default function SettingsPage() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-10">Account Settings</h1>
      
      <div className="flex gap-16">
        {/* Navigation Tabs */}
        <aside className="w-48 space-y-2">
          <button className="w-full text-left px-4 py-2 rounded-xl bg-green-50 text-green-800 font-bold text-sm">Profile</button>
          <button className="w-full text-left px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100 font-medium text-sm transition">Plan & Billing</button>
          <button className="w-full text-left px-4 py-2 rounded-xl text-slate-500 hover:bg-slate-100 font-medium text-sm transition">Model API Keys</button>
          <button className="w-full text-left px-4 py-2 rounded-xl text-red-500 hover:bg-red-50 font-medium text-sm transition mt-10">Sign Out</button>
        </aside>

        {/* Content Area */}
        <main className="flex-1 space-y-12">
          
          {/* SECTION 1: PROFILE */}
          <section className="space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Personal Identity</h3>
            <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
              <div className="w-20 h-20 bg-green-800 rounded-3xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                JD
              </div>
              <button className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50">
                Change Avatar
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-800 outline-none" defaultValue="Jane Designer" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Studio Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-800 outline-none" defaultValue="jane@studio.design" />
              </div>
            </div>
          </section>

          {/* SECTION 2: PLAN & BILLING */}
          <section className="p-8 bg-slate-900 rounded-[32px] text-white">
            <div className="flex justify-between items-start mb-8">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active Plan</span>
                <h3 className="text-2xl font-bold mt-1">Pro Member</h3>
                <p className="text-slate-400 text-sm mt-1">$50/month • Renewing March 1st</p>
              </div>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition">
                Manage Subscription
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Projects</p>
                <p className="text-lg font-bold uppercase">Unlimited</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Models</p>
                <p className="text-lg font-bold">All Access</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Priority</p>
                <p className="text-lg font-bold">High</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}