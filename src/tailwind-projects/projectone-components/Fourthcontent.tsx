import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Templatetwo } from "./Templatetwo";

export const Fourthcontent = () => {
  return (
    <div className="flex flex-col mt-16 -translate-y-44 justify-center items-center p-4 gap-20">
      <img
        src="people.png"
        className=" h-min w-max justify-center items-center"
      />

      <div className="flex flex-row gap-24">
        <img src="textt.png" className="" />
        <div className=" flex flex-col gap-8  p-4">
          <div className="flex flex-row gap-2">
            <img
              src="text2.jpg"
              className=" w-96 h-14 border-b-2 p-4 border-[#C4C4C4] "
            />
            <div className="bg-[#0A2640] h-7 w-7 rounded-full translate-y-4 border-b-2 border-[#C4C4C4]"></div>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="  rounded-full text-white -translate-x-7 relative translate-y-5 top-0.5   "
            />
          </div>

          <div className="flex flex-row gap-2">
            <img
              src="text3.png"
              className=" w-96 h-14 border-b-2 p-4 border-[#C4C4C4] "
            />
            <div className="bg-[#0A2640] h-7 w-7 rounded-full translate-y-4"></div>
            <FontAwesomeIcon
              icon={faArrowDown}
              className="  rounded-full text-white -translate-x-7 relative translate-y-5 top-0.5   "
            />
          </div>
        </div>
      </div>

      <div className="text-[#777777] text-xl mt-16">Our Blog</div>
      <img src="text4.jpg" />
      <div className="flex flex-row gap-8">
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
      </div>

      <button>
        <div className="border-[#0A2640] rounded-full border-2 text-[#0A2640] font-bold font-sans p-4 pl-12  pr-12">
          {" "}
          Load more
        </div>
      </button>
    </div>
  );
};
