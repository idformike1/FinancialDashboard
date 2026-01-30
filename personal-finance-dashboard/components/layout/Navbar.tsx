"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Wallet, ShieldCheck, TrendingUp, Bitcoin } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const NAV_ITEMS = [
    { name: "Overview", href: "/", icon: LayoutDashboard },
    { name: "Savings", href: "/savings", icon: Wallet },
    { name: "Bonds", href: "/bonds", icon: ShieldCheck },
    { name: "Index Funds", href: "/index-funds", icon: TrendingUp },
    { name: "Crypto", href: "/crypto", icon: Bitcoin },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl flex h-16 items-center px-4 justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
                        <span className="text-primary text-xl">◆</span>
                        <span>RiskDash</span>
                    </Link>
                    <div className="hidden md:flex gap-6">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
