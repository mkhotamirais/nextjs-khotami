import C2Footer from "@/components/c2-components/c2-footer";
import C2Header from "@/components/c2-components/c2-header";
import React from "react";

export default function Course2Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative bg-gray-50 text-gray-950 min-h-screen flex flex-col">
      <div className="w-96 h-96 bg-black bg-opacity-10 rounded-full absolute left-32" />
      <div className="w-96 h-96 bg-black bg-opacity-10 rounded-full absolute right-32" />
      <C2Header />
      <main className="flex-grow">{children}</main>
      <C2Footer />
    </main>
  );
}
