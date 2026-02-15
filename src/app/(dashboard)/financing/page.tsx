import { Card } from "@/components/card";
import { PageTitle } from "@/components/page-title";
import { primeBrokerFinancing } from "@/data/mockData";
import { formatPercent } from "@/lib/format";
import { getFinancingEfficiencyScore } from "@/lib/scoring";

export default function FinancingPage() {
  return (
    <div>
      <PageTitle
        title="Financing"
        subtitle="Prime broker financing terms and concentration controls."
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-3 py-2 font-medium">PB Name</th>
                <th className="px-3 py-2 font-medium">Borrow Cost (%)</th>
                <th className="px-3 py-2 font-medium">Spread vs Best (%)</th>
                <th className="px-3 py-2 font-medium">
                  Inventory Concentration (%)
                </th>
                <th className="px-3 py-2 font-medium">Collateral Used (%)</th>
                <th className="px-3 py-2 font-medium">
                  Financing Efficiency Score
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {primeBrokerFinancing.map((broker) => (
                <tr key={broker.pbName} className="text-zinc-800">
                  <td className="px-3 py-3 font-medium">{broker.pbName}</td>
                  <td className="px-3 py-3">{formatPercent(broker.borrowCostPct)}</td>
                  <td className="px-3 py-3">
                    {formatPercent(broker.spreadVsBestPct)}
                  </td>
                  <td className="px-3 py-3">
                    {formatPercent(broker.inventoryConcentrationPct)}
                  </td>
                  <td className="px-3 py-3">
                    {formatPercent(broker.collateralUsedPct)}
                  </td>
                  <td className="px-3 py-3 font-semibold text-zinc-900">
                    {getFinancingEfficiencyScore(broker)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
