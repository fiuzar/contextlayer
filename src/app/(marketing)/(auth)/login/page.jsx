// app/(auth)/login/page.tsx
export default function LoginPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Welcome back</h2>
        <p className="text-sm text-slate-500 mt-2">Enter your studio workspace.</p>
      </div>

      {/* Google OAuth Button */}
      <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700 shadow-sm mb-6">
        <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
      </button>

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">Or email</span></div>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-[10px] font-bold uppercase text-slate-400 mb-1.5 ml-1">Email Address</label>
          <input type="email" placeholder="name@agency.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-800 outline-none transition" />
        </div>
        <div>
          <div className="flex justify-between mb-1.5 ml-1">
            <label className="block text-[10px] font-bold uppercase text-slate-400">Password</label>
            <a href="/forgot-password" size="text-[10px]" className="text-green-800 hover:underline font-bold">Forgot?</a>
          </div>
          <input type="password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-800 outline-none transition" />
        </div>
        <button className="w-full bg-green-800 text-white font-bold py-4 rounded-xl hover:bg-green-900 transition shadow-lg shadow-green-800/20">
          Sign In
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-slate-500">
        New to ContextLayer? <a href="/signup" className="text-green-800 font-bold hover:underline">Create Account</a>
      </p>
    </>
  );
}