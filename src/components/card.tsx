import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Card({ title, children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-lg border border-zinc-200 bg-white p-5 shadow-sm ${className}`}
    >
      {title ? (
        <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500">
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
