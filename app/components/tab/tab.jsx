import React from "react";
import { Client } from "./client";


const Tab = ({places,regions}) => {

  return (
    <div id="tabs" className="w-full flex justify-center items-center my-16">
      <div className=" mx-4 sm:mx-16 w-full">
<Client places={places} regions={regions} />
      </div>
    </div>
  );
};

export default Tab;
