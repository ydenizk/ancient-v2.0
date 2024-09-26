import React from "react";
import Details from "./details";
import Image from "next/image";
import Gallery from "./gallery";
import Link from "next/link";

const pics = [
  "/tabs/laodi.jpg",
  "/tabs/perge.jpg",
  "/tabs/ephesus.jpg",
  "/tabs/pergamon.jpg",
];

const Main = ({ place }) => {
  return (
    <div className="my-12 grid grid-cols-1 mmd:grid-cols-3 gap-8 text-softBlack dark:text-neutral-400">
      <div className="col-span-2">
        <div className="relative w-fit cursor-pointer">
          <h1
            className="text-2xl uppercase font-semibold mb-6 mt-16 before:content-[''] before:absolute before:w-full before:bottom-0 before:bg-[#a46c54] before:hover:opacity-60 
              before:duration-500 before:h-3 before:opacity-70  transition duration-500 dark:text-neutral-300"
            id="history"
          >
            1.History
          </h1>
        </div>

        <p className="tracking-wide text-lg  font-light  leading-8">
          {place.hp1}
        </p>

        <p className="my-4 tracking-wide text-lg  font-light  leading-8">
          {place.hp2}
        </p>

        <p className="tracking-wide text-lg  font-light  leading-8">
          {place.hp3}
        </p>
        {/* title 1 */}
        <h1 className="text-xl uppercase font-semibold my-6 dark:text-neutral-400">
          {place.subTitle}
        </h1>
        <p className="my-4 tracking-wide text-lg  font-light  leading-8">
          {place.hp4}
        </p>

        <div className="w-full h-96 rounded-md relative mt-8">
          <Image
            src={place.textImageUrl}
            alt="pic"
            fill
            className="absolute object-cover"
          />
        </div>
        {place.hp5 ? (
          <p className="my-4 tracking-wide text-lg  font-light  leading-8">
            {place.hp5}
          </p>
        ) : (
          ""
        )}
        {place.hp6 ? (
          <p className="my-4 tracking-wide text-lg  font-light  leading-8">
            {place.hp6}
          </p>
        ) : (
          ""
        )}
        <div className="relative w-fit cursor-pointer">
          <h1
            id="visit"
            className="text-2xl dark:text-neutral-300 uppercase font-semibold my-10 before:content-[''] before:absolute before:w-full before:bottom-0 before:bg-[#a46c54] before:hover:opacity-60 
              before:duration-500 before:h-3 before:opacity-70  transition duration-500"
          >
            2.How to get there
          </h1>
        </div>

        <p className="tracking-wide text-lg  font-light  leading-8">
          {place.p1}
        </p>
        <div className="w-fit relative cursor-pointer">
          <h1
            id="gallery"
            className="text-2xl uppercase font-semibold my-10 before:content-[''] before:absolute before:w-full before:bottom-0 before:bg-[#a46c54] before:hover:opacity-60 
              before:duration-500 before:h-3 before:opacity-70  transition duration-500 dark:text-neutral-300"
          >
            3.GALLERY
          </h1>
        </div>

        {/* GALLERY */}

        <Gallery place={place} />
        {/* gallery END */}

        <div className="relative w-fit cursor-pointer">
          <h1
            className="text-2xl dark:text-neutral-300 uppercase font-semibold my-10 before:content-[''] before:absolute before:w-full before:bottom-0 before:bg-[#a46c54] before:hover:opacity-60 
              before:duration-500 before:h-3 before:opacity-70  transition duration-500"
            id="nearby"
          >
            4.Explore Nearby Sites
          </h1>
        </div>

        <p className="my-4 tracking-wide text-lg  font-light  leading-8">
          You can also explore several nearby historical spots around{" "}
          {place.name}. These close-by attractions offer further insight into
          the rich history of the region and are easily accessible for visitors
          wanting to extend their journey:
        </p>

        <div className="grid grid-cols-3 h-auto gap-2 ">
          {place?.nearbyPlaces.map((near) => {
            const randomImage = pics[Math.floor(Math.random() * pics.length)];
            return (
              <Link
                href={`/place/${near.name}`}
                key={near.id}
                className="w-full  rounded-md relative mt-8  h-64 sm:h-80 cursor-pointer "
              >
                <Image
                  src={randomImage}
                  alt="pic"
                  fill
                  className="absolute object-cover rounded-md  opacity-90 dark:opacity-70"
                />
                <div
                  className="absolute bg-neutral-400 top-0 left-0 z-50 w-full h-full opacity-60 
                transition hover:opacity-50 duration-500 font-semibold"
                ></div>
                <div>
                  <div className="absolute z-50 font-bold bottom-10 text-bgcolor dark:text-neutral-300 w-full flex flex-col items-center">
                    <h1 className="text-2xl uppercase"> {near.name} </h1>
                    <p className="font-semibold">
                      {near.distance} <span>km</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Details place={place} />
    </div>
  );
};

export default Main;
