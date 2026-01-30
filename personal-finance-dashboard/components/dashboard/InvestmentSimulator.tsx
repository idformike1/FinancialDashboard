"use client";

import { useState, useMemo } from "react";
import { RiskData, calculateProjection, formatCurrency } from "@/lib/finance";
import { TimeHorizonSlider } from "./TimeHorizonSlider";
import { RiskCard } from "./RiskCard";
import { ProjectionChart } from "./ProjectionChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InvestmentSimulatorProps {
    product: RiskData;
}

export function InvestmentSimulator({ product }: InvestmentSimulatorProps) {
    const [years, setYears] = useState(10);
    const [initialInvestment, setInitialInvestment] = useState(10000);

    const projectionData = useMemo(() => {
        return calculateProjection(initialInvestment, product.baseReturnRate, years);
    }, [initialInvestment, product.baseReturnRate, years]);

    const finalAmount = projectionData[projectionData.length - 1].amount;
    const totalReturn = finalAmount - initialInvestment;
    const totalReturnPercent = (totalReturn / initialInvestment) * 100;

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <RiskCard data={product} />

            <div className="grid gap-6 md:grid-cols-12">
                <Card className="md:col-span-4 border-border/50 bg-card/50">
                    <CardHeader>
                        <CardTitle>Simulation Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="investment">Initial Investment ($)</Label>
                            <Input
                                id="investment"
                                type="number"
                                value={initialInvestment}
                                onChange={(e) => setInitialInvestment(Number(e.target.value) || 0)}
                                className="text-lg font-mono"
                            />
                        </div>

                        <TimeHorizonSlider years={years} setYears={setYears} />

                        <div className="pt-4 border-t border-border">
                            <div className="space-y-1">
                                <span className="text-sm text-muted-foreground">Projected Value</span>
                                <p className="text-3xl font-bold text-primary tabular-nums">
                                    {formatCurrency(finalAmount)}
                                </p>
                            </div>
                            <div className="mt-4 space-y-1">
                                <span className="text-sm text-muted-foreground">Total Return</span>
                                <p className="text-xl font-medium text-emerald-500 tabular-nums">
                                    +{formatCurrency(totalReturn)} ({totalReturnPercent.toFixed(0)}%)
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-8 border-border/50 bg-card/50">
                    <CardHeader>
                        <CardTitle>Growth Projection</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ProjectionChart data={projectionData} riskData={product} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
