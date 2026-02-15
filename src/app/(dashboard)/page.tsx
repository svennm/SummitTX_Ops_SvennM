import { Card } from "@/components/card";
import { PageTitle } from "@/components/page-title";
import { kpiMetrics } from "@/data/mockData";
import { formatMetricValue } from "@/lib/format";

export default function KpiOverviewPage() {
  return (
    <div>
      <PageTitle
        title="KPI Overview"
        subtitle="Operational control metrics across trade lifecycle, financing, and exceptions."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpiMetrics.map((metric) => (
          <Card key={metric.label} title={metric.label}>
            <p className="text-2xl font-semibold tracking-tight text-zinc-900">
              {formatMetricValue(metric.value, metric.unit, metric.precision)}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
