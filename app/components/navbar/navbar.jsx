"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import DarkMode from "../darkMode";
import Links from "./links";
import { GiGreekTemple } from "react-icons/gi";
import { useNavStore } from "@/utils/store"; // Import Zustand store
import Search from "../search";

export const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const { isNavOpen } = useNavStore(); // Get isNavOpen state

  // Memoize handleScroll to prevent it from being recreated on every render
  const handleScroll = useCallback(() => {
    if (isNavOpen) return; // If full-screen menu is open, do not trigger scroll effect

    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setIsScrollingUp(false);
    } else {
      // Scrolling up
      setIsScrollingUp(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY, isNavOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Add handleScroll to the dependency array

  return (
    <div
      className={`w-full h-20 p-2    fixed z-50 bg-[#e3e4e7] dark:bg-[#444] transition-transform duration-300 ${
        isScrollingUp || isNavOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-full ">
        <div className="pl-4 flex justify-center items-center gap-x-1">
          <Link href="/">
            <h4 className="uppercase font-semibold tracking-wider font-caveat text-xl md:text-2xl w-full opacity-80 dark:opacity-100 text-softBlack dark:text-bgcolor">
              Ancient
            </h4>
            <h4 className="font-caveat font-semibold text-[#a74b08] dark:text-[#bd5810] text-2xl md:text-3xl tracking-wide w-full -mt-2">
              Asia Minor
            </h4>
          </Link>
        </div>

        <div className="flex items-center px-4 md:px-6  ">
          <Search />
          <DarkMode />
          <Links />
        </div>
      </div>
    </div>
  );
};