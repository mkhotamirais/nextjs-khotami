import React from "react";

export default function C1Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[900px] mx-auto min-h-screen flex flex-col bg-white">{children}</div>;
}
