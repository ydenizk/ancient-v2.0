"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaLocationDot } from "react-icons/fa6";

import RegionPics from "./reg-pics";

export const Client = ({places,regions}) => {
  const [activeTab, setActiveTab] = useState("regions");
  const limitedPlaces = places.slice(0, 10);
  return (
    <div className="w-full  mx-auto">
      <div className="flex gap-x-4 mb-4 mx-4 text-softBlack">
        <button
          className={`px-4 py-2 font-semibold rounded-md ${
            activeTab === "regions" ? "bg-[#a46c54] text-slate-100" : "bg-slate-200"
          }`}
          onClick={() => setActiveTab("regions")}
        >
          Regions
        </button>
        <button
          className={`px-4 py-2 font-semibold  rounded-md ${
            activeTab === "places" ? "bg-[#a46c54] text-slate-100" : "bg-slate-200"
          }`}
          onClick={() => setActiveTab("places")}
        >
          Featured places
        </button>
      </div>

      <div className="p-4  rounded-lg">
        {activeTab === "regions" && (
          <div className="w-full h-auto">
         <RegionPics regions={regions} />
          </div>
        )}
{/* places.... */}
        {activeTab === "places" && (
          <div className="w-full h-auto">
            <div className="grid  grid-cols-2 sm:grid-cols-3   mmd:grid-cols-4  gap-x-4 h-[540px]">
              <div className="grid grid-rows-2 gap-y-4">
                <Link href="/place/Ephesus" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/ephesus.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                  <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Assos</h1>
                  </div>
                </Link>
                <Link href="/place/Laodicea" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/laodi.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Laodicea</h1>
                  </div>
                </Link>
              </div>
              <div className="mmd:grid hidden  grid-rows-3 gap-y-4">
                <Link href="/place/Troy" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/troy.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Troy</h1>
                  </div>
                </Link>
                <Link href="/place/Pergamon" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/pergamon.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Pergamon</h1>
                  </div>
                </Link>
                <Link href="/place/Hierapolis" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/hiera.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Hierapolis</h1>
                  </div>
                </Link>
              </div>
              <div className=" hidden sm:grid   grid-rows-2 gap-y-4">
                <Link href="/place/Perge" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/perge.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Perge</h1>
                  </div>
                </Link>
                <Link href="/place/Didyma" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/didyma.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Didyma</h1>
                  </div>
                </Link>
              </div>
              <div className="grid grid-rows-3 gap-y-4">
                <Link href="/place/Aphrodisias" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/aphro.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Aphrodisias</h1>
                  </div>
                </Link>
                <Link href="/place/Ani" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/ani.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Ani</h1>
                  </div>
                </Link>
                <Link  href="/place/Nemrut" className="relative hover:cursor-pointer rounded-lg overflow-hidden ">
                  <Image
                    src="/tabs/nemrut.jpg"
                    alt="pic"
                    fill
                    className="absolute object-cover rounded-lg
                     transition-transform duration-300 ease-in-out transform hover:scale-110"
                  />
                    <div className="absolute bottom-4 w-full  flex flex-col justify-center items-center ">
                    <div>
                      <FaLocationDot color="#f1f5f9" size={27} />
                    </div>

                    <h1 className="text-slate-100 font-semibold text-lg">Nemrut</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

{/* places.... */}


      </div>
    </div>
  );
};
