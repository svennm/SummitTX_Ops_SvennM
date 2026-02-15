import { Card } from "@/components/card";
import { PageTitle } from "@/components/page-title";
import { SeverityBadge } from "@/components/severity-badge";
import { openTradeBreaks } from "@/data/mockData";

export default function TradeControlPage() {
  return (
    <div>
      <PageTitle
        title="Trade Control"
        subtitle="Open breaks and settlement control exceptions."
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-3 py-2 font-medium">Trade ID</th>
                <th className="px-3 py-2 font-medium">Counterparty</th>
                <th className="px-3 py-2 font-medium">Asset</th>
                <th className="px-3 py-2 font-medium">Issue Type</th>
                <th className="px-3 py-2 font-medium">Age (hrs)</th>
                <th className="px-3 py-2 font-medium">Status</th>
                <th className="px-3 py-2 font-medium">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {openTradeBreaks.map((item) => (
                <tr key={item.tradeId} className="text-zinc-800">
                  <td className="px-3 py-3 font-medium">{item.tradeId}</td>
                  <td className="px-3 py-3">{item.counterparty}</td>
                  <td className="px-3 py-3">{item.asset}</td>
                  <td className="px-3 py-3">{item.issueType}</td>
                  <td className="px-3 py-3">{item.ageHours}</td>
                  <td className="px-3 py-3">{item.status}</td>
                  <td className="px-3 py-3">
                    <SeverityBadge severity={item.severity} />
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
