"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const menu = [
  { href: "/routing-1", label: "home" },
  { href: "/routing-1/r1-basic", label: "r1 basic" },
  { href: "/routing-1/_r2-private", label: "r2 private" },
  { href: "/routing-1/r3-group-1", label: "r3 group 1" },
  { href: "/routing-1/r3-group-2", label: "r3 group 2" },
  { href: "/routing-1/r4-dinamic", label: "r4 dinamic" },
  { href: "/routing-1/r4-dinamic/1", label: "r4 dinamic 1" },
  { href: "/routing-1/r4-dinamic/2", label: "r4 dinamic 2" },
];

export default function LayoutRouting({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="min-h-screen max-w-2xl mx-auto px-3 bg-white">
        <div className="h-12 text-cehter border-b mb-2 flex items-center justify-center">
          <h2>Layout Routing</h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          <aside className="col-span-1 flex flex-col">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`${
                  pathname.split("/")[2] === item.href.split("/")[2]
                    ? "bg-gray-200 text-gray-950"
                    : "bg-gray-50 text-gray-400"
                } border rounded mb-1 hover:text-gray-950 px-1`}
              >
                {item.label}
              </Link>
            ))}
          </aside>
          <section className="col-span-2 sm:col-span-3">{children}</section>
        </div>
      </div>
    </main>
  );
}
