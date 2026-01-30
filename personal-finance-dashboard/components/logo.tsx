import { TrendingUp } from "lucide-react";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-600 shadow-lg ${className}`}>
            <TrendingUp className="h-[60%] w-[60%] text-white" strokeWidth={2.5} />
        </div>
    );
}
