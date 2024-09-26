"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";
import { places } from "@/app/data";
import Link from "next/link";

export const Client = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const xPercent = useRef(0); // Use useRef to keep the value persistent
  let direction = -1;

  const animation = useCallback(() => {
    if (xPercent.current < -50) {
      xPercent.current = 0;
    } else if (xPercent.current > 0) {
      xPercent.current = -100;
    }
    gsap.set(ref1.current, { xPercent: xPercent.current });
    gsap.set(ref2.current, { xPercent: xPercent.current });
    xPercent.current += 0.003 * direction;
    requestAnimationFrame(animation);
  }, [direction]); // No need for xPercent in dependency as it's managed by useRef

  useEffect(() => {
    requestAnimationFrame(animation);
  }, [animation]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="relative whitespace-nowrap">
        <div className="flex gap-x-6">
          {/* First Set of Items */}
          <div className="flex gap-6" ref={ref1}>
            {places.map((place, index) => {
              return (
                <Link
                  href={`/place/${place.name}`}
                  key={index}
                  className="w-auto px-3 h-12  rounded-full gap-x-2 flex justify-evenly items-center
                   bg-red-50 dark:bg-neutral-600
                   transition duration-500 hover:bg-red-100 dark:hover:bg-neutral-500"
                >
                  <div className="relative w-10 h-10 rounded-full ">
                    <Image
                      src={place.img}
                      alt="pic"
                      fill
                      className="object-cover absolute rounded-full"
                    />
                  </div>
                  <p className="font-semibold text-softBlack dark:text-neutral-300   opacity-90">{place.name}</p>
                </Link>
              );
            })}
          </div>

          {/* Second Set of Items (Duplicated for Infinite Loop Effect) */}
          <div className="flex gap-6" ref={ref2}>
            {places.map((place, index) => {
              return (
                <Link
                  href={`/place/${place.name}`}
                  key={index}
                  className="w-auto px-3 h-12  rounded-full gap-x-2 flex justify-evenly items-center bg-red-50
                  dark:bg-neutral-600 transition duration-500 hover:bg-red-100 dark:hover:bg-neutral-500"
                >
                  <div className="relative w-10 h-10 rounded-full">
                    <Image
                      src={place.img}
                      alt="pic"
                      fill
                      className="object-cover absolute rounded-full"
                    />
                  </div>
                  <p className="font-semibold  text-softBlack dark:text-neutral-300 opacity-90 ">{place.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};