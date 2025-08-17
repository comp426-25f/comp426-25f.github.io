import React from 'react';

export function MdxCodeComparison({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full max-w-full md:flex-row gap-0 md:gap-3">
      {children}
    </div>
  );
}

export function MdxCodeComparisonColumn({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1">{children}</div>;
}
