import React, { cache } from "react";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/utils/prismaDb";
import { notFound } from "next/navigation";
import { GiGreekTemple } from "react-icons/gi";

const getRegion = cache(async (urlTitle) => {
  const region = await prisma.region.findUnique({
    where: { urlTitle },
    include: {
      places: true, // Include images (gallery)
    },
  });
  if (!region) notFound();
  return region;
});


/* export async function generateMetadata({ params: { urlTitle} }) {
  const region = await getRegion(urlTitle);

  return {
    title: capitalizeTitle(region.title)  + " -Ancient Asia Minor",
    description: region.title,
  };
} */

  //buyuk harf için..
  export async function generateMetadata({ params: { urlTitle} }) {
    const region = await getRegion(urlTitle);
  
    // Function to capitalize the first letter of each word
    const capitalizeTitle = (title) => {
      return title.replace(/\b\w/g, (char) => char.toUpperCase());
    };
  
    return {
      title: capitalizeTitle(region.title) + " Region" + " - Ancient Asia Minor",
      description: capitalizeTitle(region.title),
    };
  }

async function RegionPage({ params: { urlTitle } }) {
  const region = await getRegion(urlTitle);

  return (
    <div className="max-w-screen-2xl mx-auto relative pt-16  mmd:pt-20 px-4 mmd:px-8 font-roboto
     text-softBlack dark:text-neutral-400">
      <div className=" h-[80vh] mmd:h-[55vh]  w-full my-12 flex flex-col mmd:flex-row 
      rounded-md gap-8 mx-auto">
        <div className="relative w-full h-full flex-2 mmd:flex-3 min-h-[320px]">
          <Image
            src={region.imageUrl}
            fill
            alt="pic"
            className="object-cover rounded-md opacity-95 dark:opacity-85"
          />
        </div>
        <div className=" flex-1 mmd:flex-2 mt-2  h-full relative ">
          <h1 className=" text-4xl xl:text-5xl uppercase font-semibold h-full text-left dark:text-neutral-300 ">
            {region.title} Region{" "}
            <div className="mmd:ml-auto w-20 h-20 bg-[#7c5134] pl-3 pt-2 mt-4 rounded-full block mmd:hidden  ">
                <GiGreekTemple size={54} color="#e3e4e7" />   
            </div>
       
          </h1>

          <div className="ml-auto w-20 h-20 mmd:block hidden bg-[#7c5134] pl-3 pt-2 rounded-full absolute bottom-3  ">
                <GiGreekTemple size={54} color="#e3e4e7" />   
            </div>
       
        </div>
      </div>

      {/* Alt kısım */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 mr-8">
          <h1 className="text-xl uppercase font-semibold mb-6 mt-16 dark:text-neutral-300">
            Brief History
          </h1>
          <p className="tracking-wide text-lg font-montserrat font-extralight leading-8">
            {region.desc1}
          </p>
          <p className="tracking-wide text-lg font-montserrat font-extralight leading-8 mt-4">
            {region.desc2}
          </p>
        </div>
        <div className="ml-4">
          <h1 className="uppercase text-xl font-bold mt-28 w-full border-b text-orange-950 dark:text-[#a46c54] border-orange-800 dark:border-[#a46c54]">
            Spots
          </h1>
          <ul className="list-disc mx-4 my-8 text-lg ">
            {region.places
              ? region.places.map((place) => {
                  return (
                    <li key={place.id} className="text-orange-900 transition duration-500  hover:text-orange-700 dark:hover:text-[#cc651a] dark:text-[#a74b08] ">
                      <Link href={`/place/${place.name}`}> {place.name} </Link>
                    </li>
                  );
                })
              : ""}
          </ul>

          <div className="relative mt-16 w-full  h-48">
            <Image src={`/regions/${region.mapImg}`} alt="pic" fill className="object-cover absolute rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionPage;
