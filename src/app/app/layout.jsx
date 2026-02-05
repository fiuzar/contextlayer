// app/app/layout.jsx
import Sidebar from "@/components/app/sidebar";
import TopNav from "@/components/app/topNav";

export default function AppLayout({ children }) {
  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* 1. Primary Left Sidebar (App Level) */}
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        {/* 2. Persistent Top Bar */}
        <TopNav />

        {/* 3. Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}