"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavStore } from "@/utils/store";
import Stairs from "./stairs";

const StairsClient = () => {
  const { isNavOpen, openNav, closeNav } = useNavStore();

  return (
    <div className="overflow-hidden z-50  ">
      <button
        onClick={() => {
          closeNav();
        }}
        className="fixed w-12 h-12  flex items-center 
      justify-center top-24 right-8 cursor-pointer z-50 text-bgcolor font-nunito overflow-hidden"
      >
        {isNavOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          ""
        )}
      </button>

      <AnimatePresence mode="wait">
        {isNavOpen && (
          <>
            <Stairs />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StairsClient;
