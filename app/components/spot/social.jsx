import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Social = () => {
  return (
    <div className="flex items-center gap-x-4">
      <Link
        href="https://x.com/home?lang=eng"
        className=" hover:bg-slate-300 transition duration-500  bg-bgcolor dark:bg-neutral-300 p-2 rounded-full"
        target="_blank"
      >
        <FaXTwitter size={27} color="#555" />
      </Link>
      <Link
        href="https://www.instagram.com"
        className=" hover:bg-slate-300 transition duration-500  bg-bgcolor dark:bg-neutral-300 p-2 rounded-full"
        target="_blank"
      >
        <FaInstagram size={27} color="#555"/>
      </Link>
      <Link
        href="https://www.facebook.com"
        className=" hover:bg-slate-300 transition duration-500  bg-bgcolor dark:bg-neutral-300 p-2 rounded-full"
        target="_blank"
      >
        <FaFacebookF size={25} color="#555"  />
      </Link>
    </div>
  );
};

export default Social;
