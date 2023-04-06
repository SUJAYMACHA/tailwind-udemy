import { Aboutcontentone } from "./About-components/Aboutcontentone";
import {  Aboutfinalcontent } from "./About-components/Aboutfinalcontent";
import { Aboutcontenttwo } from "./About-components/Aboutcontenttwo";
import { Aboutheader } from "./About-components/Aboutheader";
import { Blogemailcard } from "./blog-components/Blogemailcard";
import { Finalcontent } from "./homepage-components/Finalcontent";
import { Aboutemailcard } from "./About-components/Aboutemailcard";
import { Aboutlast } from "./About-components/Aboutlast";


  
  const About = () => {
    return (
     <div className="flex flex-col">
    <Aboutheader></Aboutheader>
    <Aboutcontentone></Aboutcontentone>
    <Aboutcontenttwo></Aboutcontenttwo>
    <Aboutfinalcontent></Aboutfinalcontent>
    <Aboutemailcard></Aboutemailcard>
    <Aboutlast></Aboutlast>
    


    
     </div>
    );
  };
  
  export default About;
  