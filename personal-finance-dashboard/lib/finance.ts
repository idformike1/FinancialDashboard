export type RiskData = {
  id: string;
  name: string;
  riskLevel: "Low" | "Medium" | "High" | "Very High";
  volatility: string;
  baseReturnRate: number; // e.g., 0.05 for 5%
  minReturnRate: number;
  maxReturnRate: number;
  description: string;
  color: string;
};

export function calculateProjection(initialAmount: number, annualRate: number, years: number) {
  const data = [];
  let currentAmount = initialAmount;
  
  for (let i = 0; i <= years; i++) {
    data.push({
      year: i,
      amount: Math.round(currentAmount),
    });
    currentAmount = currentAmount * (1 + annualRate);
  }
  
  return data;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getYearsLabel(years: number) {
  return years === 1 ? '1 Year' : `${years} Years`;
}
