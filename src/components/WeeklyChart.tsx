"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.1 },
    { day: "Wed", hours: 2.8 },
    { day: "Thu", hours: 4.2 },
    { day: "Fri", hours: 3.8 },
    { day: "Sat", hours: 5.0 },
    { day: "Sun", hours: 5.5 },
];

export default function WeeklyChart() {
    return (
        <div className="bg-white rounded-[16px] shadow-sm p-8 w-full max-w-[800px] mx-auto">
            <h3 className="text-lg font-semibold text-slate-800 mb-6 tracking-tight">
                Weekly Deep Work
            </h3>
            <div className="w-full h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#d946ef" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            strokeDasharray="6 6"
                            stroke="#E6EAF2"
                            vertical={false}
                        />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 12 }}
                            tickFormatter={(value: number) => `${value}h`}
                            width={40}
                        />
                        <Tooltip
                            contentStyle={{
                                background: "#0F172A",
                                border: "none",
                                borderRadius: "12px",
                                color: "#fff",
                                fontSize: "13px",
                                fontWeight: 500,
                                padding: "8px 14px",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                            }}
                            itemStyle={{ color: "#e2e8f0" }}
                            formatter={(value: number | undefined) => [`${value ?? 0}h`, "Deep Work"]}
                            cursor={{ stroke: "#d946ef", strokeWidth: 1, strokeDasharray: "4 4" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="hours"
                            stroke="url(#lineGradient)"
                            strokeWidth={3}
                            dot={{
                                fill: "#fff",
                                stroke: "#8b5cf6",
                                strokeWidth: 2,
                                r: 5,
                            }}
                            activeDot={{
                                fill: "#d946ef",
                                stroke: "#fff",
                                strokeWidth: 2,
                                r: 7,
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
