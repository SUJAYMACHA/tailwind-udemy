import React from "react";
import { Headerone } from "./homepage-components/Headerone";
import { Firstcontent } from "./homepage-components/Firstcontent";
import { Secondcontent } from "./homepage-components/Secondcontent";
import { Thirdcontent } from "./homepage-components/Thirdcontent";
import { Fourthcontent } from "./homepage-components/Fourthcontent";
import { Fifthcontent } from "./homepage-components/Fifthcontent";
import { Finalcontent } from "./homepage-components/Finalcontent";

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
