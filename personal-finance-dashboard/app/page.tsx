import { RiskCard } from "@/components/dashboard/RiskCard";
import { ComparisonSection } from "@/components/dashboard/ComparisonSection";
import { PRODUCT_DATA } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="space-y-4 text-center md:text-left animate-in fade-in slide-in-from-top-4 duration-500">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          Lagani Dashboard
        </h1>
        <p className="max-w-[700px] text-muted-foreground text-lg">
          Analyze and calibrate your investment strategy. Compare risk profiles across different asset classes and project potential returns.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {PRODUCT_DATA.map((product) => (
          <div key={product.id} className="group relative">
            <RiskCard data={product} />
            <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-t from-background/90 to-transparent rounded-xl">
              <Button asChild className="gap-2" variant="secondary">
                <Link href={`/${product.id}`}>
                  Analyze {product.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Clickable overlay for entire card */}
            <Link href={`/${product.id}`} className="absolute inset-0 z-10" />
          </div>
        ))}
      </div>

      <ComparisonSection />
    </div>
  );
}
