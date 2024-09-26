import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className=" p-4 h-[90vh] md:h-[75vh] text-softBlack dark:text-bgcolor">
      <div className="h-full  w-full mt-4  min-h-96 flex flex-col md:flex-row 
       gap-x-6 justify-center 
      items-center">
        <div className="w-full h-full relative  flex-2 md:flex-1 ">
          <Image
            src="/ban-2.jpg"
            alt="hero"
            fill
            className="object-cover absolute rounded-lg"
          />
        </div>
        <div className=" grid grid-rows-1 md:grid-rows-3  items-center  justify-center gap-2
         h-full flex-1">
          <div className="w-full h-full hidden md:block brightness-90 relative row-span-2 ">
            <Image
              src="/6.jpg"
              alt="hero"
              fill
              className="object-cover absolute rounded-lg"
            />
          </div>
          <div className=" h-full w-full row-span-1 pt-4">
            <h1 className="text-4xl lg:text-5xl   font-semibold text-softBlack dark:text-neutral-300">
              ANCIENT SITES AND CITIES OF TURKIYE
            </h1>
            <h2 className="mt-1 text-xl dark:text-neutral-300  text-softBlack">
              The history of Asia Minor and Turkish Mesopotamia.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
