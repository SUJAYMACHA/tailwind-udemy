import React from "react";
import Slide_bottom from "./Slide_bottom";
import { Slide_common } from "./Slide_common";
export const Slidesix = () => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex flex-row gap-24  border-b border-black p-24">
        <Slide_common
          title="Urban-"
          titletwo="Wanderlust."
          button="Brand Identity Design"
          Description_title="Description"
          Description="
            Description

Explore City Guides wanted a brand identity that captured the spirit 
of urban exploration. We created a logo using bold, 
urban-inspired typography and incorporated iconic city landmarks,
 evoking a sense of adventure and discovery.
    
                "
          buttontwo="Design Process"
        />
        <div className="flex flex-col gap-4 translate-x-72 translate-y-12">
          <img
            src="./Slidesixpic.jpg"
            className=" h-48 w-96 "
          />
          <img
            src="./Slidesix.jpg"
            className="h-48 w-3/4  "
          />
        </div>
      </div>
      <Slide_bottom
        slidenumber="04"
        name="Client"
        topic="Explore City Guides"
        title="Date"
        date="01.09.2022"
      />
    </div>
  );
};
export default Slidesix;
