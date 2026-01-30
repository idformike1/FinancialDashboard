import { InvestmentSimulator } from "@/components/dashboard/InvestmentSimulator";
import { PRODUCT_DATA } from "@/lib/data";
import { TrendingUp } from "lucide-react";

export default function IndexFundsPage() {
    const product = PRODUCT_DATA.find((p) => p.id === "index-funds")!;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-purple-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                    <p className="text-muted-foreground">Long-term market tracking for simplified wealth building.</p>
                </div>
            </div>

            <InvestmentSimulator product={product} />
        </div>
    );
}
