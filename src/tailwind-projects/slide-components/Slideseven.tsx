import React from 'react'
import { Slide_common } from './Slide_common';
import Slide_bottom from './Slide_bottom';



export const Slideseven = () => {
    return(
        <div className=" flex flex-col justify-center">
        <div className="flex flex-row gap-24  border-b border-black p-24">
          <Slide_common
            title="Artisinal Flavours"
            titletwo=""
            button="Brand Identity Design"
            Description_title="Description"
            Description="
            Description

            Gourmet Delights, a specialty food brand, wanted a brand identity that
             emphasized their artisanal approach. We crafted a logo 
            with handcrafted typography and a decorative emblem, reflecting
             the brand's dedication to quality and craftsmanship.
      
                  "
            buttontwo="Design Process"
          />
<div className=' flex flex-row gap-4 translate-x-56 '>
    <img src='slideseven.jpg' className=' h-96 flex'/>
    <div className='flex flex-col h-40 w-40 gap-4 '>
        <img src='slidesevenpic.jpg'/>
        <img src='seventwo.jpg'/>


        <img src='seventhree.jpg'/>


    </div>
</div>
        </div>
        <Slide_bottom
          slidenumber="05"
          name="Client"
          topic="Gourmet Delight"
          title="Date"
          date="01.09.2022"
        />
      </div>
    );
};
export default Slideseven;