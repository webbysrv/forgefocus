"use client";

import { Bell } from "lucide-react";

export default function TopBar() {
    return (
        <header className="h-[80px] bg-white flex items-center justify-between px-8 border-b border-[#E6EAF2]">
            {/* Page Title */}
            <h2 className="text-2xl font-semibold text-slate-800 tracking-tight">
                Dashboard
            </h2>

            {/* Right Actions */}
            <div className="flex items-center gap-5">
                {/* Notification Bell */}
                <button className="relative p-2 rounded-xl hover:bg-slate-50 transition-colors">
                    <Bell className="w-5 h-5 text-slate-400" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                </button>

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-violet-500/20 transition-shadow">
                    <span className="text-white text-sm font-semibold">S</span>
                </div>
            </div>
        </header>
    );
}
