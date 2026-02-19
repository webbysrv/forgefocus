"use client";

import { Clock, CheckCircle2, Flame } from "lucide-react";

const stats = [
    {
        title: "Today's Focus Time",
        value: "3h 24m",
        icon: Clock,
    },
    {
        title: "Sessions Completed",
        value: "4",
        icon: CheckCircle2,
    },
    {
        title: "Streak",
        value: "12 Days",
        icon: Flame,
    },
];

export default function StatsRow() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-[800px] mx-auto">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-white rounded-[16px] shadow-sm p-6 flex flex-col gap-3"
                >
                    <stat.icon className="w-5 h-5 text-violet-500" />
                    <div>
                        <p className="text-slate-500 text-xs font-medium tracking-wide uppercase">
                            {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-slate-800 mt-1 tracking-tight">
                            {stat.value}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
