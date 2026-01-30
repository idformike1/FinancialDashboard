import { InvestmentSimulator } from "@/components/dashboard/InvestmentSimulator";
import { PRODUCT_DATA } from "@/lib/data";
import { Wallet } from "lucide-react";

export default function SavingsPage() {
    const product = PRODUCT_DATA.find((p) => p.id === "savings")!;

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <Wallet className="h-8 w-8 text-emerald-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
                    <p className="text-muted-foreground">Low risk, steady accumulation.</p>
                </div>
            </div>

            <InvestmentSimulator product={product} />
        </div>
    );
}
