import Slide_bottom from "./Slide_bottom";
import { Slide_common } from "./Slide_common";

const Slidethree = () => {
  return (
    <div className=" flex flex-col">
    <div className="flex flex-row gap-24  border-b border-black p-24">
      <Slide_common
        title="Vibrant-"
        titletwo="Solutions."
        button="Brand Identity Design"
        Description_title="Description"
        Description="

             We created a vibrant and dynamic brand identity for TechnoTech Inc.,
              incorporating bold colors and modern typography. The logo represents
               innovation and technological advancement, aligning with the company's
                cutting-edge solutions."
         
        buttontwo="Design Process"
      
      
      />
      <div className="flex flex-row gap-10 justify-center items-center translate-x-44">
        <img src="./slidethreepic.jpg" className="h-96 w-72"/>
        <img src="./slidethree.jpg" className=" h-96 w-72"/>

        
      </div>
    </div>
    <Slide_bottom
     slidenumber='01'
     name='Client'
     topic='TechnoTech Inc.'
     title='Date'
     date='01.01.2022'    />
    </div>
  );
};
export default Slidethree;
