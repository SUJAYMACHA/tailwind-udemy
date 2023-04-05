
import { Finalcontent } from "../homepage-components/Finalcontent";
import { Templatetwo } from "../homepage-components/Templatetwo";
import { Blogemailcard } from "./Blogemailcard";

export const Blogsecondcontent = () => {
  return (
    <div className="flex flex-col p-8 justify-center items-center">
      <div className="text-[#0A2640] text-5xl pt-8 -translate-x-96 ">
        Latest News
      </div>

      <div className="flex flex-wrap gap-16 items-center justify-center pt-12 pb-24 ">
        <Templatetwo
          picture="./green2.png"
          title="Category"
          date="November 22, 2021"
          Description="Pitch termsheet backing "
          Descriptiontwo="validation focus release."
          Descriptionthree="proposition"
          icon="./girlicon.png"
          name="Chandler Bing"
        ></Templatetwo>

        <Templatetwo
          picture="./centergirl.jpg"
          title="Category"
          date="November 22, 2021"
          Description="Seed round direct mailing non "
          Descriptiontwo="disclosure agreement graphical"
          Descriptionthree=" user interface rockstar. "
          icon="./Ellipse 10.png"
          name="Rachel Green"
        ></Templatetwo>

        <Templatetwo
          picture="./blue.png"
          title="Category"
          date="November 22, 2021"
          Description="Beta prototype sales iPad gen-z   "
          Descriptiontwo="marketing network effects value"
          Descriptionthree="proposition"
          icon="./Elipse 10.png"
          name="Monica Geller"
        ></Templatetwo>

        <Templatetwo
          picture="./man2.png"
          title="Category"
          date="November 22, 2021"
          Description="Pitch termsheet backing "
          Descriptiontwo="validation focus release."
          Descriptionthree="proposition"
          icon="./girlicon.png"
          name="Chandler Bing"
        ></Templatetwo>

        <Templatetwo
          picture="./ppl2.png"
          title="Category"
          date="November 22, 2021"
          Description="Seed round direct mailing non "
          Descriptiontwo="disclosure agreement graphical"
          Descriptionthree=" user interface rockstar. "
          icon="./Ellipse 10.png"
          name="Rachel Green"
        ></Templatetwo>

        <Templatetwo
          picture="./last3.png"
          title="Category"
          date="November 22, 2021"
          Description="Beta prototype sales iPad gen-z   "
          Descriptiontwo="marketing network effects value"
          Descriptionthree="proposition"
          icon="./Elipse 10.png"
          name="Monica Geller"
        ></Templatetwo>
      </div>

      <button>
        <div className="border-[#0A2640]  rounded-full border-2 text-[#0A2640] font-bold font-sans w-8 flex  justify-center p-4 pl-20 pr-20 ">
          {" "}
          Load more
        </div>
      </button>
      
    <Blogemailcard></Blogemailcard>
    
      <Finalcontent></Finalcontent>
    </div>
  );
};
