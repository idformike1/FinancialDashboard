import { InvestmentSimulator } from "@/components/dashboard/InvestmentSimulator";
import { PRODUCT_DATA } from "@/lib/data";
import { Bitcoin } from "lucide-react";

export default function CryptoPage() {
    const product = PRODUCT_DATA.find((p) => p.id === "crypto")!;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-500/10 rounded-xl">
                    <Bitcoin className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                    <p className="text-muted-foreground">High volatility with potential for exponential returns.</p>
                </div>
            </div>

            <InvestmentSimulator product={product} />
        </div>
    );
}
