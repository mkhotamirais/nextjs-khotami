"use client";

import { useMm } from "@/store/useMm";
import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { mm, hideMm } = useMm();
  const handleClick = () => {
    if (mm) hideMm();
  };
  return <main onClick={handleClick}>{children}</main>;
}
