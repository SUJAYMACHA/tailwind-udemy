import React from "react";
import Slide_bottom from "./Slide_bottom";
import { Slide_common } from "./Slide_common";
export const Slidefive = () => {
    return(
        <div className=" flex flex-col">
        <div className="flex flex-row gap-24  border-b border-black p-24">
          <Slide_common
            title="Timeless Elegance"
            titletwo=""
            button="Brand Identity Design"
            Description_title="Description"
            Description="
    
                 We created a vibrant and dynamic brand identity for TechnoTech Inc.,
                  incorporating bold colors and modern typography. The logo represents
                   innovation and technological advancement, aligning with the company's
                    cutting-edge solutions."
             
            buttontwo="Design Process"
          
          
          />
        <div>
            <img src="./Slidefive.jpg" className="h-96 translate-x-56 translate-y-5"/>
          </div>
        </div>
        <Slide_bottom
         slidenumber='03'
         name='Client'
         topic='Luxe Jewels'
         title='Date'
         date='01.09.2022'    />
        </div>
    );
};

export default Slidefive;