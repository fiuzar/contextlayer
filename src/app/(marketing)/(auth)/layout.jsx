// app/(auth)/layout.tsx
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Minimalist Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center shadow-lg">
            <div className="w-6 h-1 bg-white rounded-full -translate-y-0.5" />
            <div className="absolute w-4 h-1 bg-white/50 rounded-full translate-y-1" />
          </div>
        </div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-sm border border-slate-200 rounded-3xl sm:px-12">
          {children}
        </div>
      </div>
    </div>
  );
}