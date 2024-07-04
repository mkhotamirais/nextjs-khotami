"use client";

import React, { useState } from "react";
import { FaBars, FaChevronLeft, FaRegUser, FaXmark } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { IoHomeOutline } from "react-icons/io5";
import { menu } from "@/lib/menu";
import { useMm } from "@/store/useMm";
import Link from "next/link";

export default function MainMenu() {
  const { mm, toggleMm, hideMm, heroBtn, toggleHeroBtn, hideHeroBtn } = useMm();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    toggleMm();
  };

  const handleHeroBtn = () => {
    toggleHeroBtn();
    if (mm) hideMm();
  };

  return (
    <motion.div
      className={`z-50 fixed bottom-4 border rounded-full w-12 text-xl h-12 flex items-center justify-center shadow-xl`}
      animate={{ left: heroBtn ? "1rem" : "-3rem" }}
      transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.button onClick={handleClick} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
        <motion.div
          initial={false}
          animate={{ rotate: mm ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="bg-gray-50 w-10 h-10 flex items-center justify-center rounded-full"
        >
          {mm ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </motion.div>{" "}
      </motion.button>
      <button
        type="button"
        aria-label="hero btn"
        onClick={handleHeroBtn}
        className={`${
          heroBtn ? "" : "rotate-180"
        } text-gray-800 absolute left-full translate-x-2 text-xs bg-white p-[0.1rem] rounded-full border border-white bg-opacity-50 backdrop-blur`}
      >
        <FaChevronLeft />
      </button>
      <BtnMenu />
    </motion.div>
  );
}

export function BtnMenu() {
  const { mm, hideMm } = useMm();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {mm && (
        <motion.div
          className="z-40 fixed bg-white bg-opacity-50 bottom-[4.5rem] left-4 w-12 border rounded-full text-xl flex flex-col items-center py-1 gap-1"
          initial={{ opacity: 0, scale: 0.8, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 80 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {menu.map((item, i) => (
            <div key={item.label}>
              <motion.button
                key={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  setHoveredMenu(item.label);
                }}
                className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,.1)" }}
                onHoverStart={() => setHoveredMenu(item.label)}
                onHoverEnd={() => setHoveredMenu(null)}
              >
                <item.icon />
                {hoveredMenu === item.label && (
                  <motion.div
                    className="z-30 absolute top-0 left-full w-max max-w-[60vw] md:max-w-[40vw] overflow-hidden pl-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`${
                        i > menu.length - 4 ? "max-h-[11.5rem]" : "max-h-72"
                      } border rounded-xl bg-white bg-opacity-50 overflow-y-scroll backdrop-blur-sm w-full text-left p-2`}
                    >
                      <h3 className="text-lg font-medium mb-2">{item.label}</h3>
                      <div className="flex flex-wrap gap-1">
                        {item.subMenus.map((itm, i) => (
                          <Link
                            onClick={() => {
                              if (mm) hideMm();
                            }}
                            href={itm.href}
                            key={i}
                            className="text-xs p-2 bg-white rounded-lg hover:text-cyan-500"
                            replace
                          >
                            {itm.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            </div>
          ))}
          <div className="border leading-none w-5 border-gray-400" />
          <Link href="/portofolio-saya">
            <motion.button
              onClick={hideMm}
              className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <FaRegUser />
            </motion.button>
          </Link>
          <Link href="/">
            <motion.button
              onClick={hideMm}
              className="bg-gray-50 z-40 relative rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <IoHomeOutline />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
