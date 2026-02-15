import { Card } from "@/components/card";
import { PageTitle } from "@/components/page-title";
import { SeverityBadge } from "@/components/severity-badge";
import { exceptionRegister } from "@/data/mockData";

export default function ExceptionsPage() {
  return (
    <div>
      <PageTitle
        title="Exceptions"
        subtitle="Central exception register with ownership and escalation states."
      />
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-zinc-500">
                <th className="px-3 py-2 font-medium">Category</th>
                <th className="px-3 py-2 font-medium">Owner</th>
                <th className="px-3 py-2 font-medium">Severity</th>
                <th className="px-3 py-2 font-medium">Open Date</th>
                <th className="px-3 py-2 font-medium">Aging (days)</th>
                <th className="px-3 py-2 font-medium">Escalation Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {exceptionRegister.map((item) => (
                <tr
                  key={`${item.category}-${item.owner}-${item.openDate}`}
                  className="text-zinc-800"
                >
                  <td className="px-3 py-3 font-medium">{item.category}</td>
                  <td className="px-3 py-3">{item.owner}</td>
                  <td className="px-3 py-3">
                    <SeverityBadge severity={item.severity} />
                  </td>
                  <td className="px-3 py-3">{item.openDate}</td>
                  <td className="px-3 py-3">{item.agingDays}</td>
                  <td className="px-3 py-3">{item.escalationStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
