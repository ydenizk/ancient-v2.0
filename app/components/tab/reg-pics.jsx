"use client";
import React from "react";
import { Map} from "./map";
import Image from "next/image";
import { useRegionStore } from "@/utils/store";
/* import { regions } from "@/app/data"; */

const RegionPics = ({regions}) => {
  const { hoveredRegion, setHoveredRegion } = useRegionStore();

  return (
    <div className="w-full   h-[540px] grid grid-cols-1 lg:grid-cols-3 gap-4  ">
      <div className="   grid grid-cols-2 gap-4 col-span-1 w-full">
        {regions.map((region) => {
          return (
            <div
              className="relative w-full cursor-pointer overflow-hidden hidden lg:block"
              key={region.id}
              onMouseEnter={() => setHoveredRegion(region.urlTitle)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              <Image
                src={region.imageUrl}
                alt={region.title}
                fill
                className="absolute object-cover rounded-lg      transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <h1 className="absolute text-slate-200 font-semibold bottom-2 left-2 capitalize"> {region.title}  </h1>
            </div>
          );
        })}
      </div>
      <div className=" w-full h-full col-span-2   rounded-md  bg-neutral-50 dark:bg-neutral-600 ">
   <Map />
      </div>
    </div>
  );
};

export default RegionPics;
