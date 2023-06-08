import { Slide_common } from "./Slide_common";
import { Slide_bottom } from "./Slide_bottom";

export const Slidefour = () => {
  return (
    <div className=" flex flex-col">
      <div className="flex flex-row gap-24  border-b border-black p-24">
        <div className="translate-x-4">
        <Slide_common
          title="Organic-"
          titletwo="Essence."
          button="Brand Identity Design"
          Description_title="Description"
          Description="

        Description

        Nature's Finest, an organic skincare brand, sought an earthy and natural brand identity. We crafted a logo with a leaf-inspired design, 
        utilizing soft and soothing colors that reflect the brand's commitment to organic ingredients."
          buttontwo="Design Process"
        />
        </div>
    <div className=" translate-x-72 translate-y-10">
      <img src="./Slidefour.jpg" className="h-3/4 w-96"/>
    </div>
      </div>
      <Slide_bottom
        slidenumber="02"
        name="Client"
        topic="Nature's Finest"
        title="Date"
        date="01.09.2022"
      />
    </div>
  );
};
export default Slidefour;
