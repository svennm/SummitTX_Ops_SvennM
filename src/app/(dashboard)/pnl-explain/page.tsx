import { Card } from "@/components/card";
import { PageTitle } from "@/components/page-title";
import { pnlExplain } from "@/data/mockData";
import { formatSignedPercent } from "@/lib/format";

const RESIDUAL_ALERT_THRESHOLD = 2;

export default function PnlExplainPage() {
  return (
    <div>
      <PageTitle
        title="PnL Explain"
        subtitle="Daily attribution with explicit residual threshold monitoring."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {pnlExplain.map((item) => {
          const isResidualAlert =
            item.label === "Residual" && Math.abs(item.pct) > RESIDUAL_ALERT_THRESHOLD;

          return (
            <Card
              key={item.label}
              title={item.label}
              className={isResidualAlert ? "border-red-300 bg-red-50" : ""}
            >
              <p
                className={`text-2xl font-semibold tracking-tight ${
                  isResidualAlert ? "text-red-700" : "text-zinc-900"
                }`}
              >
                {formatSignedPercent(item.pct)}
              </p>
              {isResidualAlert ? (
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-red-600">
                  Above 2.0% threshold
                </p>
              ) : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
