"use client";

import { RiskData } from "@/lib/finance";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ProjectionChartProps {
    data: { year: number; amount: number }[];
    riskData: RiskData;
}

export function ProjectionChart({ data, riskData }: ProjectionChartProps) {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={`color-${riskData.id}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={riskData.color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={riskData.color} stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis
                        dataKey="year"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value / 1000}k`}
                        tick={{ fill: "hsl(var(--muted-foreground))" }}
                    />
                    <Tooltip
                        formatter={(value: number | undefined) => [
                            `$${(value || 0).toLocaleString()}`,
                            "Projected Value"
                        ]}
                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke={riskData.color}
                        fillOpacity={1}
                        fill={`url(#color-${riskData.id})`}
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
