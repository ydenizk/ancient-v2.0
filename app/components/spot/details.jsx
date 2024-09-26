import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GrLocation } from "react-icons/gr";

import { IoDocumentTextOutline } from "react-icons/io5";
import Social from "./social";

const Details = ({ place }) => {
  return (
    <div className="flex flex-col  space-y-2 border-none mmd:border-l px-4 mmd:order-none order-first  ">
      <h1 className="uppercase text-xl font-bold mb-4 " id="nearby">
        Details
      </h1>

      <div>
        <Link
          href={place.mapUrl}
          target="_blank"
          className="flex  items-center gap-x-1 mb-2 hover:text-orange-900 transition duration-500 "
        >
          <div className="">
            <GrLocation size={24} />
          </div>
          <p className="">Province of {place.city.toUpperCase()}/TURKEY</p>
        </Link>
        <div className="my-2 flex  items-center gap-x-1 hover:text-orange-900 transition duration-500 cursor-pointer">
          <div>
            <IoDocumentTextOutline size={24} color="#672d06" />
          </div>
          {place.brochureUrl ? (
            <Link href={place.brochureUrl} className="" target="_blank">
              Download Brochure
            </Link>
          ) : (
            ""
          )}
        </div>

        {place.unesco ? (
          <div>
            <div className="flex flex-col justify-center  mb-6 ">
              <Image
                src="/unesc.png"
                alt="pic"
                width={120}
                height={120}
                className="  object-cover  rounded-full mt-4 ml-8 dark:bg-white"
              />
            </div>
            <Link
              href="https://whc.unesco.org/en/statesparties/tr"
              className="uppercase text-sm font-semibold text-[#a74b08] dark:text-[#bd5810] cursor-pointer
              pl-4  "
            >
              Unesco World Heritage
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Credits  */}

      <h1 className="uppercase mmd:block hidden text-xl font-bold pb-2 pt-16 ">Credits</h1>
      <div className=" mmd:flex hidden   items-center gap-x-1 text-sm">
        <div>Overview by -</div>
        <Link href="/about" className="text-orange-950 dark:text-[#a46c54]">
          AncientAsiaminor
        </Link>
      </div>
      <div className=" mmd:flex hidden  gap-x-1 text-sm ">
        <div>Photographs by - </div>
        <div className="flex flex-col justify-start">
          <Link href="/about" className="text-orange-950 dark:text-[#a46c54]">
            AncientAsiaminor
          </Link>
          <Link href="https://www.wikipedia.org" className="text-orange-950 dark:text-[#a46c54]">
            Wikipedia
          </Link>
        </div>
      </div>

      <h1 className="uppercase text-xl font-bold pb-2 pt-16 ">Share</h1>
      <Social />
    </div>
  );
};

export default Details;
