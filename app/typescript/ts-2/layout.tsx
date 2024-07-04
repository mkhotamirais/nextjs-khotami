import Link from "next/link";
import React from "react";

export default function LayoutTs2({ children }: { children: React.ReactNode }) {
  return (
    <div>
      LayoutTs2:
      <div className="flex gap-2 *:underline">
        <Link href="/typescript/ts-2">usestate</Link>
        <Link href="/typescript/ts-2/usereducer">usereducer</Link>
        <Link href="/typescript/ts-2/usecontext">usecontext</Link>
        <Link href="/typescript/ts-2/useref">useref</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}
