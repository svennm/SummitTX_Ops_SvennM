"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "KPI Overview" },
  { href: "/trade-control", label: "Trade Control" },
  { href: "/financing", label: "Financing" },
  { href: "/pnl-explain", label: "PnL Explain" },
  { href: "/exceptions", label: "Exceptions" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-zinc-200 bg-zinc-50 md:w-64 md:border-r md:border-b-0">
      <div className="border-zinc-200 p-4 md:border-b md:p-6">
        <p className="text-sm font-semibold tracking-wide text-zinc-800">
          Operations
        </p>
      </div>
      <nav className="flex gap-2 overflow-x-auto p-4 md:flex-col md:gap-1 md:p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-zinc-800 font-medium text-white"
                  : "text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
