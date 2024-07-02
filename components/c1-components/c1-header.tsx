"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/course1", label: "Home" },
  { href: "/course1/posts", label: "Posts" },
  { href: "/course1/create-post", label: "Create Post" },
];

export default function C1Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center border-b h-16 px-3 md:px-12 lg:px24">
      <Link href="/course1">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="logo"
          width="35"
          height="35"
          className="w-[35px] h-[35px]"
        />
      </Link>
      <nav>
        <ul className="text-sm flex gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${link.href.split("/")[2] === pathname.split("/")[2] ? "text-zinc-900" : "text-zinc-400 "}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
