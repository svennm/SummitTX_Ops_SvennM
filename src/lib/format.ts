export function formatMetricValue(
  value: number,
  unit: "%" | "count" | "hours" | "days",
  precision = 0,
): string {
  if (unit === "count") {
    return value.toLocaleString("en-US");
  }

  const formatted = value.toFixed(precision);
  if (unit === "%") {
    return `${formatted}%`;
  }
  return `${formatted} ${unit}`;
}

export function formatPercent(value: number, precision = 2): string {
  return `${value.toFixed(precision)}%`;
}

export function formatSignedPercent(value: number, precision = 1): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(precision)}%`;
}
