import type { Severity } from "@/data/mockData";

type SeverityBadgeProps = {
  severity: Severity;
};

const badgeStyles: Record<Severity, string> = {
  High: "bg-red-100 text-red-700 border-red-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Low: "bg-zinc-200 text-zinc-700 border-zinc-300",
};

export function SeverityBadge({ severity }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-1 text-xs font-medium ${badgeStyles[severity]}`}
    >
      {severity}
    </span>
  );
}
