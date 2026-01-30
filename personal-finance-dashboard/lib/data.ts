import { RiskData } from "./finance";

export const PRODUCT_DATA: RiskData[] = [
    {
        id: "savings",
        name: "High-Yield Savings",
        riskLevel: "Low",
        volatility: "Very Low",
        baseReturnRate: 0.045, // 4.5%
        minReturnRate: 0.04,
        maxReturnRate: 0.05,
        description: "FDIC-insured accounts ideal for emergency funds and short-term goals. minimal risk with steady, modest growth.",
        color: "#10b981", // Emerald-500 Hex for reliability in Recharts
    },
    {
        id: "bonds",
        name: "Government Bonds",
        riskLevel: "Medium",
        volatility: "Low to Medium",
        baseReturnRate: 0.055, // 5.5%
        minReturnRate: 0.03,
        maxReturnRate: 0.07,
        description: "Fixed-income securities backed by government stability. Suitable for preserving capital while earning better yields than savings.",
        color: "#3b82f6", // Blue-500
    },
    {
        id: "index-funds",
        name: "Index Funds (S&P 500)",
        riskLevel: "High",
        volatility: "Medium",
        baseReturnRate: 0.09, // 9% avg
        minReturnRate: -0.20, // Crash scenario
        maxReturnRate: 0.25, // Bull market
        description: "Diversified portfolio tracking a market index. Historically strong long-term growth but subject to market fluctuations.",
        color: "#a855f7", // Purple-500
    },
    {
        id: "crypto",
        name: "Cryptocurrency",
        riskLevel: "Very High",
        volatility: "Extreme",
        baseReturnRate: 0.15, // Speculative avg
        minReturnRate: -0.80,
        maxReturnRate: 2.00,
        description: "Digital assets with massive growth potential but equally massive downside risk. Only for aggressive risk profiles.",
        color: "#f97316", // Orange-500
    },
];
