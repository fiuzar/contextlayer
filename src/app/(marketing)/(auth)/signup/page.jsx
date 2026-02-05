// app/(auth)/signup/page.tsx
'use client';
import { useState } from 'react';

export default function SignupPage() {
  const [step, setStep] = useState(1);

  if (step === 2) {
    return (
      <div className="text-center animate-in fade-in zoom-in duration-300">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Initialize your workspace</h2>
        <p className="text-sm text-slate-500 mb-8">Choose a template to seed your first project context.</p>
        <div className="grid grid-cols-1 gap-3 mb-8">
          {['Brand Identity Kit', 'Product/SaaS Landing Page', 'Creative Brief (Blank)'].map((template) => (
            <button key={template} onClick={() => window.location.href='/dashboard'} className="p-4 border border-slate-100 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition text-left group">
              <p className="font-bold text-slate-800 group-hover:text-emerald-700">{template}</p>
              <p className="text-xs text-slate-400">Setup context in 1 minute</p>
            </button>
          ))}
        </div>
        <button onClick={() => window.location.href='/dashboard'} className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-green-800">
          Skip to Dashboard →
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Get Started</h2>
        <p className="text-sm text-slate-500 mt-2">Professional continuity starts here.</p>
      </div>
      
      <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700 shadow-sm mb-6">
        <img src="/google-logo.svg" alt="Google" className="w-5 h-5" />
        Sign up with Google
      </button>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
        <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-800" />
        <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-800" />
        <div className="relative">
          <input type="password" placeholder="Password (8+ chars)" className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-green-800" />
          {/* Password strength meter - subtle line */}
          <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 rounded-b-xl w-1/3 transition-all" />
        </div>
        <button className="w-full bg-green-800 text-white font-bold py-4 rounded-xl hover:bg-green-900 transition shadow-lg mt-4">
          Create Account
        </button>
      </form>
    </>
  );
}