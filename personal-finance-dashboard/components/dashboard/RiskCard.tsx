import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RiskData } from "@/lib/finance";
import { AlertTriangle, TrendingUp, Zap } from "lucide-react";

interface RiskCardProps {
    data: RiskData;
}

export function RiskCard({ data }: RiskCardProps) {
    // Determine color for badges based on risk
    const getRiskColor = (level: string) => {
        switch (level) {
            case "Low": return "bg-emerald-500/15 text-emerald-500 hover:bg-emerald-500/25";
            case "Medium": return "bg-blue-500/15 text-blue-500 hover:bg-blue-500/25";
            case "High": return "bg-orange-500/15 text-orange-500 hover:bg-orange-500/25";
            case "Very High": return "bg-red-500/15 text-red-500 hover:bg-red-500/25";
            default: return "bg-primary/10 text-primary";
        }
    };

    return (
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-bold">{data.name}</CardTitle>
                    <Badge className={getRiskColor(data.riskLevel)} variant="outline">
                        {data.riskLevel} Risk
                    </Badge>
                </div>
                <CardDescription className="text-base mt-2">
                    {data.description}
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-accent/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <Zap className="h-4 w-4" /> Volatility
                    </div>
                    <p className="text-lg font-semibold">{data.volatility}</p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-accent/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <TrendingUp className="h-4 w-4" /> Base Annual Return
                    </div>
                    <p className="text-lg font-semibold text-primary">
                        {(data.baseReturnRate * 100).toFixed(1)}%
                    </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-accent/50 border border-border/50">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                        <AlertTriangle className="h-4 w-4" /> Max Drawdown (Est.)
                    </div>
                    <p className="text-lg font-semibold text-destructive">
                        {data.minReturnRate < 0 ? `${(data.minReturnRate * 100).toFixed(0)}%` : "0%"}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
