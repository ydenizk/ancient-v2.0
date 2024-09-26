import React from "react";

import { GiGreekTemple } from "react-icons/gi";
import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { MdOutlineNearbyOff } from "react-icons/md";

const Tags = ({place}) => {
  return (
    <div className=" mt-8   md:mt-16 pb-4  inline-flex gap-x-2 xss:gap-x-3 sm:gap-x-4 md:gap-x-8 border-b  dark:text-slate-200 ">
      <a href="#history" className="flex items-center gap-x-2  group">
        <div className="opacity-80 bg-red-100  dark:bg-[#a46c54] rounded-full p-1 group-hover:bg-[#bd5810] transition duration-500 ">
          <GiGreekTemple 
          className="text-[20px] xss:text-[24px] md:text-[26px]  sm:text-[27px]"/>
        </div>
        <h3 className="font-bold sm:text-base text-sm   text-softBlack dark:text-neutral-300" >History</h3>
      </a>
      <a className="flex items-center gap-x-1 sm:gap-x-2 group " href="#gallery">
        <div className="opacity-80 bg-red-100 dark:bg-[#a46c54] rounded-full p-1 group-hover:bg-[#bd5810] transition duration-500">
          <RiGalleryView2 className=" text-[20px] xss:text-[24px] md:text-[26px]  sm:text-[27px]" />
        </div>
        <h3 className="font-bold sm:text-base text-sm   text-softBlack dark:text-neutral-300 ">Gallery</h3>
      </a>
      <a href="#visit" className="flex items-center gap-x-2 group">
        <div className="opacity-80 bg-red-100 dark:bg-[#a46c54] rounded-full p-1 group-hover:bg-[#bd5810] transition duration-500">
          <MdOutlineDirectionsCarFilled className=" text-[20px] xss:text-[24px] md:text-[26px]  sm:text-[27px]" />
        </div>
        <h3 className="font-bold sm:text-base text-sm   text-softBlack dark:text-neutral-300">How to Visit</h3>
      </a>
      <a className="flex items-center gap-x-2 group" href="#nearby">
        <div className="opacity-80 bg-red-100 dark:bg-[#a46c54] rounded-full p-1 group-hover:bg-[#bd5810] transition duration-500">
          <MdOutlineNearbyOff className=" text-[20px] xss:text-[24px] md:text-[26px]  sm:text-[27px]" />
        </div>
        <h3 className="font-bold sm:text-base text-sm   text-softBlack dark:text-neutral-300">Explore Nearby Sites</h3>
      </a>
    </div>
  );
};

export default Tags;
