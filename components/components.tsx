import React from "react";

export function Landing({ children }: { children: React.ReactNode }) {
  return <section className="min-h-screen w-full">{children}</section>;
}
