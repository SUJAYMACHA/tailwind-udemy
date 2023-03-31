import React from "react";
import { Headerone } from "./projectone-components/Headerone";
import { Firstcontent } from "./projectone-components/Firstcontent";
import { Secondcontent } from "./projectone-components/Secondcontent";
import { Thirdcontent } from "./projectone-components/Thirdcontent";
import { Fourthcontent } from "./projectone-components/Fourthcontent";
import { Fifthcontent } from "./projectone-components/Fifthcontent";
import { Finalcontent } from "./projectone-components/Finalcontent";

const Homepage = () => {
  return (
    <div className="flex flex-col ">
      <div className="bg-[#0A2640]">
        <Headerone />
        <Firstcontent></Firstcontent>
      </div>
      <Secondcontent></Secondcontent>
      <Thirdcontent></Thirdcontent>
      <Fourthcontent></Fourthcontent>
      <Fifthcontent></Fifthcontent>
      <Finalcontent></Finalcontent>
    </div>
    
  );
};

export default Homepage;
