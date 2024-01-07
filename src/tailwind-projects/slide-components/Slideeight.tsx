import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slide_bottom from "./Slide_bottom";


export const Slideeight = () => {
  return (

  <div className=" flex flex-col">
    <div className="p-20 border-black border-b-2  flex flex-row ">
      <div className="flex flex-col gap-16">
        <div className="text-4xl text-black flex font-bold">Get in touch</div>
        <div className=" flex flex-row gap-8">
          <div className="bg-[#EBEBEB]  rounded-3xl gap-8 p-4 h-96 w-64 flex flex-col items-center ">
            <div className="gap-20 flex flex-row ">
              <div className="text-black font-bold text-3xl">01</div>

              <div className="">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-8 translate-y-1"
                />
              </div>
            </div>

            <div className="text-black text-lg gap-0">
              <div className="">Website:</div>
            
              <div className=" font-bold">www.instagram.com</div>
            </div>
            <div className="text-black text-lg gap-0">
              <div className="">Email:</div>
              
              <div className=" font-bold">hey@instagram.com</div>
            </div>
          </div>

          <div className="bg-[#1E1E1E] rounded-3xl  gap-8 p-4 h-96 w-64 flex flex-col items-center ">
            <div className="gap-20 flex flex-row ">
              <div className="text-white font-bold text-3xl">02</div>

              <div className="">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-8 translate-y-1 text-white"
                />
              </div>
            </div>

            <div className="text-white text-lg gap-0 ">
              <div className=" ">Social Media:</div>
              <div className=" font-bold">INSTAGRAM/TWITTER</div>
              <div className="">@machasujay</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src="./slideeight.jpg"
          className="h-96 translate-x-72 translate-y-16 w-full"
        />
      </div>
    </div>
    <div>
    <Slide_bottom
    slidenumber="06"
    name=""
    topic=""
    title=""
    date="Macha Sujay-Brand Identity Design"/>
    </div>
    </div>
  );
};
export default Slideeight;
