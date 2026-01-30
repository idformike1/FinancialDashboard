"use client";

import { PRODUCT_DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, Legend } from "recharts";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function ComparisonSection() {
    // Normalize data for the radar chart (0-100 scale)
    // Risk: Low=20, Medium=50, High=80, Very High=100
    // Return: relative to max
    // Volatility: qualitative mapped to number

    const radarData = PRODUCT_DATA.map(p => {
        let riskScore = 0;
        if (p.riskLevel === "Low") riskScore = 20;
        else if (p.riskLevel === "Medium") riskScore = 50;
        else if (p.riskLevel === "High") riskScore = 80;
        else if (p.riskLevel === "Very High") riskScore = 100;

        const returnScore = (p.baseReturnRate / 0.15) * 100; // Normalized against crypto's 15%

        return {
            name: p.name,
            Risk: riskScore,
            Return: Math.min(returnScore, 100),
            fullMark: 100
        };
    });

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <div className="grid lg:grid-cols-2 gap-8">

                {/* Radar Chart Comparison */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Risk vs. Return Profile</CardTitle>
                        <CardDescription className="text-secondary-foreground/80">Visual comparison of risk exposure and potential returns</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px] sm:h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                <PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
                                <PolarAngleAxis
                                    dataKey="name"
                                    tick={{ fill: "hsl(var(--foreground))", fontSize: 10 }}
                                />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />

                                <Radar name="Risk Exposure" dataKey="Risk" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
                                <Radar name="Potential Return" dataKey="Return" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />

                                <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "hsl(var(--popover))",
                                        borderColor: "hsl(var(--border))",
                                        color: "hsl(var(--popover-foreground))",
                                        borderRadius: "0.5rem",
                                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                                    }}
                                    itemStyle={{ fontSize: '12px' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Detailed Comparison Table */}
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle>Asset Class Comparison</CardTitle>
                        <CardDescription>Detailed breakdown of key performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[140px]">Asset Class</TableHead>
                                    <TableHead>Risk</TableHead>
                                    <TableHead>Avg Return</TableHead>
                                    <TableHead>Volatility</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {PRODUCT_DATA.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="font-medium">{product.name}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={
                                                product.riskLevel === "Low" ? "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" :
                                                    product.riskLevel === "Medium" ? "text-blue-500 bg-blue-500/10 border-blue-500/20" :
                                                        product.riskLevel === "High" ? "text-orange-500 bg-orange-500/10 border-orange-500/20" :
                                                            "text-red-500 bg-red-500/10 border-red-500/20"
                                            }>
                                                {product.riskLevel}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-primary font-bold">{(product.baseReturnRate * 100).toFixed(1)}%</TableCell>
                                        <TableCell className="text-muted-foreground">{product.volatility}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

            </div>
        </div>
    );
}
