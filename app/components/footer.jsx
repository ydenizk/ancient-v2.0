import React from "react";
import Link from "next/link";
import { links } from "@/app/data";
import Newsletter from "./newsletter/newsletter";
import { GiGreekTemple } from "react-icons/gi";
import Social from "./spot/social";

function Footer() {
  return (
    <div className="w-full h-auto  text-softBlack dark:text-bgcolor p-0 mt-32 ">
      <div className=" w-full p-4 px-8 bg-[#ddd2c3] dark:bg-black  ">
        <div>
          <div className="pl-4 flex  items-center gap-x-4 my-4">
            <div className="opacity-70">
              <GiGreekTemple size={64} color="#222" />
            </div>
            <Link href="/">
              <h4
                className="uppercase font-semibold tracking-wider font-caveat text-3xl w-full opacity-80 dark:opacity-100
               text-softBlack dark:text-bgcolor "
              >
                Ancient
              </h4>
              <h4 className="font-caveat font-semibold text-[#a74b08] dark:text-[#bd5810] text-4xl tracking-wide w-full -mt-2">
                Asia Minor
              </h4>
            </Link>
          </div>
          <h1 className="w-1/2 font-light text-softBlack  text-sm dark:text-bgcolor">
            Subscribe to our newsletter to stay updated on the latest added
            ancient site ,events, and more!{" "}
          </h1>
        </div>

        <Newsletter />
      </div>

      <div
        className=" py-4  bg-[#ddd2c3]  dark:bg-black grid grid-cols-2 gap-8 px-8 items-center justify-center 
          "
      >
        <div className="flex flex-col justify-center ">
          <div>
            <div className="mb-10">
              <h1 className="text-lg sm:text-xl uppercase font-semibold">Contact</h1>
              <p className="font-extralight">ydkurt@yahoo.com</p>
            </div>
            <Social />
          </div>
        </div>
        <div className=" ml-20   ">
          <h1 className="uppercase text-lg sm:text-xl font-bold 
          tracking-wide mb-3 text-softBlack dark:text-bgcolor ">
            CHECK OUT{" "}
          </h1>

          <ul className="   ">
            {links.map((link,index) => {
              return (
                <li className="px-[2px] tracking-wide" key={index}>
                  <Link
                    href={link.href}
                    className="whitespace-nowrap capitalize text-base sm:text-lg transition duration-500 hover:text-[#555]"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="h-16 bg-[#ddd2c3]  dark:bg-black px-8  text-right">
        <h1 className="text-xs pt-6 opacity-80  text-softBlack  dark:text-bgcolor tracking-wide ">
          &copy;All rights reserved by YdenizK 2024. V2.0
        </h1>
      </div>
    </div>
  );
}

export default Footer;
