import React from "react";
import { GiGreekTemple } from "react-icons/gi";

const Text = () => {
  return (
    <div className="flex justify-center items-center my-8 text-softBlack dark:text-bgcolor ">
<div className="w-full px-4 mx-auto flex flex-col md:flex-row justify-center items-center 
md:items-start md: gap-12">
  {/* Temple Icon on the left, aligned at the top */}
  <div className="flex flex-col justify-start mt-4">
    <div className="w-20 h-20 bg-[#a46c54] rounded-full flex justify-center items-center">
      <GiGreekTemple size={54} color="e3e4e7" />
    </div>
  </div>

  {/* Text Content on the right */}
  <div className="w-full max-w-lg">
    <p className=" text-xl sm:text-2xl font-light italic mb-2 font-montserrat dark:text-neutral-300">
      <span className=" text-4xl sm:text-5xl font-semibold">&quot;</span>
      <span className="mr-2 relative">
        <button className="before:content-[''] before:absolute before:w-full 
        before:bottom-0 before:bg-[#a46c54] before:hover:opacity-60 
        before:duration-500 before:h-3 before:opacity-40 transition duration-500 ">
          Ancient Asia Minor
        </button>
      </span>
      is an independent individual initiative to promote ancient sites and
      cities of various civilizations that lived in Asia Minor and Turkish
      Mesopotamia.
    </p>
    <p className="text-xl sm:text-2xl font-light italic font-montserrat dark:text-neutral-300">
      Here you can find basic and clear information about the top spots
      including brief history, location, and options on how to arrive.{" "}
      <span className="text-4xl sm:text-5xl font-semibold">&quot;</span>
    </p>
  </div>
</div>
    </div>
  );
};

export default Text;
