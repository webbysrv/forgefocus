"use client";

import {
  LayoutDashboard,
  Timer,
  BarChart3,
  Target,
  Settings,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Focus Session", icon: Timer, active: false },
  { label: "Analytics", icon: BarChart3, active: false },
  { label: "Goals", icon: Target, active: false },
  { label: "Settings", icon: Settings, active: false },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[220px] bg-[#0F172A] flex flex-col z-50">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-6 pt-8 pb-10">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="text-white font-semibold text-lg tracking-tight">
          ForgeFocus
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-3 flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-200 w-full text-left ${item.active
              ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/25"
              : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
          >
            {item.active && <item.icon className="w-[18px] h-[18px]" />}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bottom subtle branding */}
      <div className="px-6 pb-6">
        <div className="text-[11px] text-slate-600">© 2026 ForgeFocus</div>
      </div>
    </aside>
  );
}
