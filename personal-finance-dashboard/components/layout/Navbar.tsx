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
            <div className="container mx-auto max-w-7xl relative flex h-16 items-center px-4 justify-between">

                {/* Mobile: Spacer to balance the toggle if needed, or just justify-between handles it. 
                    Since Logo is absolute centered, we just need the Toggle on the right. 
                    The Left side container holds desktop links. */}

                <div className="flex items-center gap-8">
                    {/* Logo Link: Absolute Center on Mobile, Static on Desktop */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold tracking-tight absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:transform-none"
                    >
                        <img src="/logo.png" alt="Lagani Logo" className="h-10 w-auto md:h-12 object-contain" />
                        <span className="text-xl md:text-2xl hidden sm:inline-block">Lagani</span>
                    </Link>

                    {/* Desktop Nav Items */}
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

                <div className="flex items-center gap-4 ml-auto">
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
