import React from "react";
import C1Header from "@/components/c1-components/c1-header";
import C1Footer from "@/components/c1-components/c1-footer";
import C1Container from "@/components/c1-components/c1-container";

export default function Course1Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-zinc-100 text-zinc-900">
      <C1Container>
        <C1Header />
        {children}
        <C1Footer />
      </C1Container>
    </main>
  );
}
