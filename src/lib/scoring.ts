import type { PrimeBrokerFinancing } from "@/data/mockData";

export function getFinancingEfficiencyScore(
  broker: PrimeBrokerFinancing,
): number {
  const penalty =
    broker.borrowCostPct * 8 +
    broker.spreadVsBestPct * 22 +
    broker.inventoryConcentrationPct * 0.35 +
    broker.collateralUsedPct * 0.22;

  return Math.max(0, Math.min(100, Number((100 - penalty).toFixed(1))));
}
