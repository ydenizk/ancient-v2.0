"use client";

import React from "react";
import { regions, places } from "@/app/data";
import Link from "next/link";
import { useNavStore } from "@/utils/store";
import { GiGreekTemple } from "react-icons/gi";

const Menu = () => {
  const { closeNav } = useNavStore();

  return (
    <div
      className="w-full h-full text-orange-200 z-50 p-8 overflow-y-auto bg-[#333]
      max-h-[calc(100vh-80px)]" // Adjusting for navbar height (80px)
    >
      <div>
        <div className="w-full my-6 mmd:my-8">
          <h1
            className="w-full text-3xl xxs:text-4xl mmd:text-5xl font-bold mb-4
           mmd:mb-8 text-center"
          >
            Destinations
          </h1>
        </div>

        <div className="flex flex-col">
          {/* Left: Places Section */}
          <div>
            <h2 className="text-lg mmd:text-xl font-semibold ">
              Explore all places
            </h2>
            <ul className="w-full grid grid-cols-4 ssm:grid-cols-5 mmd:grid-cols-6 gap-4 mt-6">
              {places.map((place) => {
                return (
                  <li
                    key={place.id}
                    className="p-1 mmd:p-2 rounded-md flex items-center gap-x-1 mmd:gap-x-2 max-w-fit
                     bg-[#444] transition duration-500 hover:bg-[#a05b32]"
                  >
                    <div className="hidden xss:block">
                      <GiGreekTemple size={20} color="#bdb7aa" />
                    </div>
                    <Link
                      onClick={() => {
                        closeNav();
                      }}
                      href={`/place/${place.name}`}
                      className="text-xs mmd:text-sm text-orange-200 "
                    >
                      {place.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Regions Section */}
          <div>
            <h2 className="text-lg mmd:text-xl font-semibold mt-8">
              Explore by Region
            </h2>
            <ul className="w-full grid grid-cols-2 xss:grid-cols-3 mmd:grid-cols-4 gap-1 mmd:gap-2 mt-4">
              {regions.map((region) => {
                return (
                  <li
                    key={region.id}
                    className="p-1 mmd:p-2 rounded-md max-w-fit bg-[#555] transition duration-500 hover:bg-[#a05b32]"
                  >
                    <Link
                      onClick={() => {
                        closeNav();
                      }}
                      href={`/regions/${region.id}`}
                      className="text-xs mmd:text-sm capitalize text-orange-300"
                    >
                      {region.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;