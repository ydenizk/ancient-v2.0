"use client";

import React, { useRef } from "react";
import { handleNews } from "./newsAction";
import NewsBtn from "./newsBtn";

const NewsletterClient = () => {
  const ref = useRef(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await handleNews(formData);
      }}
      className="flex gap-1  items-center 
          w-auto  my-6  "
    >
      <input
        className="w-80  h-10 border text-softBlack bg-slate-200
               font-extralight border-none outline-0 
                rounded-full outline-none px-2  "
        type="email"
        name="email"
        required
        placeholder="Your email"
      />

      <NewsBtn />
    </form>
  );
};

export default NewsletterClient;
