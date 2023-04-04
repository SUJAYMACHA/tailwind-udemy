import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
  rel="stylesheet"
></link>;

export const Thirdcontent = () => {
  return (
    <div className="text-white -translate-y-64 w-full  bg-[#0A2640] p-8 flex flex-col">
      <div className="p-4 font-normal font-Manrope text-5xl translate-x-16 mt-16  w-fit">
        An enterprise template to ramp
        <div className="flex flex-row ">
          <div className="mt-8 ">up your company website</div>
          <button>
            <div className="relative left-96 translate-y-6">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="bg-[white] rounded-full h-12 w-12  text-[#0A2640]  "
              />

              <FontAwesomeIcon
                icon={faArrowRight}
                className="bg-[white] rounded-full h-12 w-12 text-[#0A2640] relative left-5 "
              />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center p-16">
       
       <img src="./frst box.jpg" className=" h-72 w-56 rounded-xl "/>
       <img src="./middle box.png" className=" h-96 w-80 "/>
       <img src="./last box.png" className=" h-80 w-64 "/>
       </div>


    </div>
  );
};
