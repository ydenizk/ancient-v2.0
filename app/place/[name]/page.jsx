import React, { cache } from "react";
import Image from "next/image";
import Tags from "../../components/spot/tags";
import Main from "../../components/spot/main";
import { prisma } from "@/utils/prismaDb";
import { notFound } from "next/navigation";

const getPlace = cache(async (name) => {
  const place = await prisma.place.findUnique({
    where: { name },
    include: {
      nearbyPlaces: true, // Include nearby places
      gallery: true, // Include images (gallery)
    },
  });
  if (!place) notFound();
  return place;
});

export async function generateMetadata({ params: { name} }) {
  const place = await getPlace(name);

  return {
    title: place.name + " -Ancient Asia Minor",
    description: place.slogan,
  };
}


async function PlacePage({ params: { name } }) {
  const place = await getPlace(name);

  return (
    <div className="max-w-screen-2xl mx-auto relative  pt-20 px-4 md:px-8 font-roboto dark:text-bgcolor text-softBlack ">
      
      <div className=" h-screen  md:h-[60vh] pb-5 max-h-[80%] min-h-[400px]   w-full my-8  md:my-12  
     flex md:flex-row flex-col-reverse rounded-md gap-4 md:gap-8">

{/* first child */}
        <div className=" flex-2 mt-2 relative ">
          <h1 className="  text-3xl sm:text-4xl md:text-5xl uppercase font-semibold  dark:text-neutral-300 ">{place.name} </h1>

          <h2 className=" mt-6 md:mt-20 uppercase font-semibold text-lg sm:text-xl 
          md:text-2xl text-orange-950 dark:text-[#6c4d36] ">
            {place.slogan}
          </h2>
          <p className="mt-2 text-base sm:text-lg  md:text-xl font-extralight leading-8 italic text-softBlack  dark:text-neutral-300 ">
            {place.headline}
          </p>

          <p
            className=" font-extralight my-2 mt-8 absolute bottom-1 
            -right-11 opacity-70 md:block hidden "
            style={{ transform: "rotate(-90deg)" }}
          >
            No <span className=" "> {place.id.slice(0, 2)} </span>
          </p>
        </div>

{/* second child */}
        <div className="relative w-full min-h-[50%] opacity-95 dark:opacity-80   md:min-h-96 md:h-full  flex-2  md:flex-3  ">
          <Image
            src={place.heroImageUrl}
            fill
            alt="pic"
            className="object-cover rounded-md absolute "
          />
        </div>
      </div>

      <Tags place={place} />
      <Main place={place} />
    </div>
  );
}

export default PlacePage;
