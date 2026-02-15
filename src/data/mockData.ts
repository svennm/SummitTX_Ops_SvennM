export type Severity = "Low" | "Medium" | "High";

export type KpiMetric = {
  label: string;
  value: number;
  unit: "%" | "count" | "hours" | "days";
  precision?: number;
};

export type TradeBreak = {
  tradeId: string;
  counterparty: string;
  asset: string;
  issueType: string;
  ageHours: number;
  status: "Investigating" | "Pending Confirm" | "Escalated";
  severity: Severity;
};

export type PrimeBrokerFinancing = {
  pbName: string;
  borrowCostPct: number;
  spreadVsBestPct: number;
  inventoryConcentrationPct: number;
  collateralUsedPct: number;
};

export type PnlLineItem = {
  label: string;
  pct: number;
};

export type ExceptionItem = {
  category: string;
  owner: string;
  severity: Severity;
  openDate: string;
  agingDays: number;
  escalationStatus: "None" | "Desk Lead" | "Ops Head" | "CFO";
};

export const kpiMetrics: KpiMetric[] = [
  { label: "Trade Fail Rate", value: 1.4, unit: "%", precision: 1 },
  { label: "Unmatched Trades", value: 28, unit: "count" },
  { label: "Avg Break Resolution Time", value: 6.3, unit: "hours", precision: 1 },
  { label: "Financing Drag", value: 0.82, unit: "%", precision: 2 },
  { label: "Collateral Utilization", value: 73.5, unit: "%", precision: 1 },
  { label: "Unexplained PnL", value: 2.4, unit: "%", precision: 1 },
  { label: "Exception Aging", value: 4.2, unit: "days", precision: 1 },
  { label: "OMS Booking Accuracy", value: 99.2, unit: "%", precision: 1 },
];

export const openTradeBreaks: TradeBreak[] = [
  {
    tradeId: "TRD-10492",
    counterparty: "JPM",
    asset: "US Equity Swap",
    issueType: "Price Mismatch",
    ageHours: 11,
    status: "Investigating",
    severity: "High",
  },
  {
    tradeId: "TRD-10495",
    counterparty: "GS",
    asset: "UST Repo",
    issueType: "Settlement Date",
    ageHours: 4,
    status: "Pending Confirm",
    severity: "Medium",
  },
  {
    tradeId: "TRD-10501",
    counterparty: "MS",
    asset: "EM IRS",
    issueType: "Notional Break",
    ageHours: 19,
    status: "Escalated",
    severity: "High",
  },
  {
    tradeId: "TRD-10504",
    counterparty: "BAML",
    asset: "CDS Index",
    issueType: "Static Data",
    ageHours: 3,
    status: "Investigating",
    severity: "Low",
  },
  {
    tradeId: "TRD-10510",
    counterparty: "CITI",
    asset: "EU Equity",
    issueType: "Fee Rate",
    ageHours: 8,
    status: "Pending Confirm",
    severity: "Medium",
  },
];

export const primeBrokerFinancing: PrimeBrokerFinancing[] = [
  {
    pbName: "Goldman Sachs",
    borrowCostPct: 1.62,
    spreadVsBestPct: 0.31,
    inventoryConcentrationPct: 27,
    collateralUsedPct: 71,
  },
  {
    pbName: "Morgan Stanley",
    borrowCostPct: 1.49,
    spreadVsBestPct: 0.18,
    inventoryConcentrationPct: 24,
    collateralUsedPct: 65,
  },
  {
    pbName: "JP Morgan",
    borrowCostPct: 1.77,
    spreadVsBestPct: 0.42,
    inventoryConcentrationPct: 31,
    collateralUsedPct: 76,
  },
  {
    pbName: "Bank of America",
    borrowCostPct: 1.54,
    spreadVsBestPct: 0.22,
    inventoryConcentrationPct: 18,
    collateralUsedPct: 59,
  },
];

export const pnlExplain: PnlLineItem[] = [
  { label: "Market Move", pct: 3.1 },
  { label: "FX Impact", pct: -0.7 },
  { label: "Financing Impact", pct: -0.9 },
  { label: "Corporate Actions", pct: 0.4 },
  { label: "Residual", pct: 2.6 },
];

export const exceptionRegister: ExceptionItem[] = [
  {
    category: "Cash Reconciliation",
    owner: "M. Chen",
    severity: "High",
    openDate: "2026-02-10",
    agingDays: 5,
    escalationStatus: "Ops Head",
  },
  {
    category: "Corporate Action Election",
    owner: "J. Patel",
    severity: "Medium",
    openDate: "2026-02-12",
    agingDays: 3,
    escalationStatus: "Desk Lead",
  },
  {
    category: "Stock Borrow Allocation",
    owner: "A. Rossi",
    severity: "Low",
    openDate: "2026-02-14",
    agingDays: 1,
    escalationStatus: "None",
  },
  {
    category: "NAV Sign-off Delay",
    owner: "K. Brown",
    severity: "High",
    openDate: "2026-02-08",
    agingDays: 7,
    escalationStatus: "CFO",
  },
  {
    category: "Trade Confirmation Gap",
    owner: "S. Alvarez",
    severity: "Medium",
    openDate: "2026-02-11",
    agingDays: 4,
    escalationStatus: "Desk Lead",
  },
];
