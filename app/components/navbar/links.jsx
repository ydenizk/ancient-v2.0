"use client";

import React from "react";
import Link from "next/link";
import { useNavStore } from "@/utils/store";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";

const Links = () => {
  const { isNavOpen, openNav ,closeNav} = useNavStore();
  const pathname = usePathname(); // Get the current path
  const router = useRouter();

  // Function to handle "Map" navigation
  const handleMapClick = (e) => {
    e.preventDefault();
    closeNav();

    if (pathname === "/") {
      // If on the homepage, scroll to the map section
      const mapElement = document.getElementById("mapo");
      if (mapElement) {
        mapElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the homepage, navigate to the homepage first, then scroll to the map section
      router.push("/#mapo");
    }
  };

  // Function to handle "Regions" navigation
  const handleRegionsClick = (e) => {
    e.preventDefault();
    closeNav();

    if (pathname === "/") {
      // If on the homepage, scroll to the regions section
      const regionsElement = document.getElementById("tabs");
      if (regionsElement) {
        regionsElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on the homepage, navigate to the homepage first, then scroll to the regions section
      router.push("/#tabs");
    }
  };

  return (
    <ul className="flex items-center justify-center text-sm md:text-base gap-x-2 md:gap-x-4 ml-4 md:ml-8 text-softBlack
     dark:text-bgcolor">
      <li>
        <Link href="/">Home </Link>
      </li>
      <li>
        <button
          onClick={openNav}
          className="flex justify-center items-center p-1 pl-2 bg-neutral-300 
          dark:bg-neutral-500 rounded-md"
        >
          <p>Destinations</p>
          <MdOutlineArrowDropDown />
        </button>
      </li>
      <li>
        {/* Update Regions link to handle navigation */}
        <a href="#tabs" onClick={handleRegionsClick} >Regions</a>
      </li>
      <li>
        {/* Update Map link to handle navigation */}
        <a href="#mapo" onClick={handleMapClick}>Map</a>
      </li>
    </ul>
  );
};

export default Links;