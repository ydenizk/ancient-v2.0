"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button className=" p-[7px] cursor-pointer rounded-full transition duration-500 ml-4 bg-bgcolor hover:bg-slate-300">
      {pending ? (
        <div className="flex justify-center items-center gap-1 text-softBlack ">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2  border-t-2 border-slate-300"></div>
        </div>
      ) : (
        <div className="">
          <IoIosArrowRoundForward size={27} color="#333" />
        </div>
      )}
    </button>
  );
};

export default NewsBtn;