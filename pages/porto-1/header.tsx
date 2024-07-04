"use client";

import { usePorto1 } from "@/store/usePorto1";
import { motion } from "framer-motion";
import { FaBars, FaXmark } from "react-icons/fa6";
import { links } from "./lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="absolute w-full bg-gray-200 h-16"
    >
      <NavCollapse />
      <NavMain />
      <NavBtn />
    </motion.header>
  );
}

function NavContent({ className }: { className?: string }) {
  return links.map((item) => (
    <Link href={item.hash} key={item.hash} className={`${className} hover:text-gray-950`}>
      {item.name}
    </Link>
  ));
}

function NavBtn() {
  const { nav, toggleNav } = usePorto1();
  const handleClick = () => {
    toggleNav();
  };

  return (
    <motion.button
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      onClick={handleClick}
      type="button"
      aria-label="nav toggle"
      className="flex sm:hidden fixed top-4 right-4 size-12 rounded-full border border-black items-center justify-center"
    >
      {nav ? <FaBars /> : <FaXmark />}
    </motion.button>
  );
}

function NavCollapse() {
  return (
    <nav className="block sm:hidden fixed border right-3 top-20">
      nav collapse
      <NavContent />
    </nav>
  );
}

function NavMain() {
  return (
    <nav className="hidden sm:block bg-white shadow p-3 fixed w-fit left-1/2 top-4 -translate-x-1/2 text-sm text-gray-500 rounded-full">
      <div className="flex gap-3 px-3">
        <NavContent className="block" />
      </div>
    </nav>
  );
}
