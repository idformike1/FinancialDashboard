import { InvestmentSimulator } from "@/components/dashboard/InvestmentSimulator";
import { PRODUCT_DATA } from "@/lib/data";
import { ShieldCheck } from "lucide-react";

export default function BondsPage() {
    const product = PRODUCT_DATA.find((p) => p.id === "bonds")!;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                    <ShieldCheck className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                    <p className="text-muted-foreground">Balanced growth with government stability.</p>
                </div>
            </div>

            <InvestmentSimulator product={product} />
        </div>
    );
}
