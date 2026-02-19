"use client";

import { Pause, Square } from "lucide-react";

export default function TimerCard() {
    return (
        <div className="w-full max-w-[600px] mx-auto">
            <div className="bg-white rounded-[20px] shadow-sm p-10 text-center">
                {/* Timer Display */}
                <div className="text-7xl font-bold text-slate-800 tracking-tight tabular-nums leading-none">
                    45:12
                </div>

                {/* Session Label */}
                <p className="mt-3 text-slate-500 text-base font-medium">
                    Deep Work Session
                </p>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-3 mt-8">
                    <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-200 text-sm">
                        <Pause className="w-4 h-4" />
                        Pause
                    </button>
                    <button className="inline-flex items-center gap-2 px-8 py-3 border border-[#E6EAF2] text-slate-500 font-medium rounded-xl hover:bg-slate-50 transition-all duration-200 text-sm">
                        <Square className="w-3.5 h-3.5" />
                        End Session
                    </button>
                </div>
            </div>
        </div>
    );
}
