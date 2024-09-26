import { Hero } from "./components/hero";
import { Infinite } from "./components/infinite/infinite";
import Mapp from "./components/mapp/mapp";
import Tab from "./components/tab/tab";
import Text from "./components/text";
import { prisma } from "@/utils/prismaDb";




export default async function Home() {
  const places = await prisma.place.findMany({
    orderBy: { name: "desc" },
  });

  const regions = await prisma.region.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <div className="max-w-screen-2xl mx-auto relative  pt-20 font-roboto ">
      {/* <div className="bg-slate-200 z-50 absolute top-0 left-0 w-full
       h-full overflow-hidden scoll-none "> </div> */}
      <Hero />
      <Infinite />
      <Text />
      <Mapp />


      <Tab places={places} regions={regions} />

    </div>
  );
}
