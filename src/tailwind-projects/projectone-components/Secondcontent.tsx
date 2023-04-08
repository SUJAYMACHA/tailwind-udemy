import { Template } from "./Template";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

<head>
  ...
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</head>;

export const Secondcontent = () => {
  return (
    <div className="bg-white w-full  -translate-y-72 flex flex-col pt-36   ">
      <div className="gap-6 items-center flex-col flex mb-10  ">
        <div className=" font-Manrope text-[#777777] "> Our Service </div>
        <div className="font-Manrope font-normal text-3xl">
          Handshake infographic mass market{" "}
        </div>
        <div className="font-Manrope font-normal text-3xl">
          crowdfunding iteration.
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-36 mb-28">
        <Template
          picture="./green.png"
          title="Cool feature title"
          Description="Learning curve network effects"
          Description2="return on investments."
          button="Explore Page"
        />
        <Template
          picture="./middle.png"
          title="Even Cooler Feature"
          Description="Learning curve network effects"
          Description2="return on investments."
          button="Explore Page"
        />
        <Template
          picture="./last.png"
          title="Cool feature title"
          Description="Learning curve network effects"
          Description2="return on investments."
          button="Explore Page"
        />
      </div>







      <div className="flex flex-col p-8  gap-36 mt-36   ">
        <div className="flex flex-row gap-96">
          <div className="translate-x-60 ">
            <img src="./man.png" className="h-96 w-96" />
            <img
              src="./white2.png"
              className=" h-2/5 w-72 relative  bottom-56 left-28 "
            ></img>
            <div className="flex flex-row -translate-y-32">
              <div className="h-12 w-2.5 bg-[#0DBBFC] -translate-y-72 relative left-40  ">
                {" "}
              </div>
              <div className="h-7 w-2.5 bg-[#0DBBFC] -translate-y-72 relative left-44  ">
                {" "}
              </div>

              <div className="h-28 w-2.5 bg-[#0DBBFC] -translate-y-96 bottom-4 relative left-48  ">
                {" "}
              </div>
              <div className="h-24 w-2.5 bg-[#0DBBFC] -translate-y-96  relative left-52 ">
                {" "}
              </div>
              <div className="h-32 w-2.5 bg-[#0A2640] -translate-y-80 bottom-24 relative left-56  ">
                {" "}
              </div>
              <div className="gap-2 flex flex-row">
                <div className="h-32 w-2.5 bg-[#0DBBFC] -translate-y-96 bottom-8 relative left-60  ">
                  {" "}
                </div>
                <div className="h-28 w-2.5 bg-[#0DBBFC] -translate-y-96 bottom-4 relative left-60  ">
                  {" "}
                </div>
                <div className="h-16 w-2.5 bg-[#0DBBFC] -translate-y-80 bottom-8 relative left-60  ">
                  {" "}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-Manrope text-xl text-[#0A2640] relative bottom-48 translate-x-14 -translate-y-9">
                  30%
                </div>
                <div className="text-Manrope text-xl text-[#0A2640] relative bottom-48 translate-x-14 -translate-y-9">
                  More income in June.
                </div>
              </div>
            </div>
          </div>





          <div className="flex flex-col items-center translate-y-4 gap-2 h-min    ">
            <div className="text-Manrope text-3xl ">
              We connect our customers
            </div>
            <div className="text-Manrope text-3xl">
              with the best, and help them
            </div>
            <div className=" text-Manrope text-3xl">
              {" "}
              keep up-and stay open.
            </div>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="xl"
              className="text-[#0A2640] -translate-x-44 translate-y-8 "
            />
            <div className="  font-Manrope font-medium">
              {" "}
              We connect our customers with the best.
            </div>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="xl"
              className="text-[#0A2640] -translate-x-44 translate-y-8 "
            />
            <div className="  font-Manrope font-medium mr-3">
              {" "}
              Advisor success customer launch party.
            </div>
            <FontAwesomeIcon
              icon={faCheckCircle}
              size="xl"
              className="text-[#0A2640] -translate-x-44 translate-y-8  "
            />
            <div className="  font-Manrope font-medium mr-16">
              {" "}
              Business-to-consumer long tail.
            </div>
            <button>
              <img
                src="./Buttons.png"
                className="w-48 translate-y-10 -translate-x-24"
              />
            </button>
          </div>
        </div>










        <div className="  -translate-y-96 p-8 pt-36   ">
          <div className=" flex flex-row items-center justify-center">
            <div className="flex flex-col translate-x-32  ">
              <div className="text-Manrope text-3xl ">
                We connect our customers
              </div>
              <div className="text-Manrope text-3xl">
                with the best, and help them
              </div>
              <div className=" text-Manrope text-3xl">
                {" "}
                keep up-and stay open.
              </div>
              <div className=" flex items-center mt-10 ">
                <div className="flex flex-col gap-10">
                  <div className="text-white font-sans font-semibold text-base bg-[#0A2640] p-4  flex flex-row gap-2">
                    <div>
                      <FontAwesomeIcon
                        icon={faLeaf}
                        className="relative left-0 text-white"
                      />
                    </div>
                    We connect our customers with the best.
                  </div>
                  <div className=" flex flex-row gap-2 translate-x-4">
                    <div>
                      <FontAwesomeIcon icon={faEye} className="font-light" />
                    </div>
                    <div className="font-sans font-semibold text-base text-[#0A2640]">
                      Advisor success customer launch party.{" "}
                    </div>
                  </div>
                  <div className="flex flex-row mt-4">
                    <div>
                      <FontAwesomeIcon icon={faSun} className="translate-x-4" />
                    </div>
                    <div className="font-sans font-semibold text-base text-[#0A2640] translate-x-6">
                      Business-to-consumer long tail.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
              <img src="./images/girl.jpg" className="h-96 w-80 translate-x-72" />
             
          
            <img src="./white2.png" className="w-72 relative top-44 right-10"></img>
            <img src="./Percentage.jpg" className="relative right-96 top-24 translate-x-36"/>
            <div className=" font-Manrope text-xs font-medium">
              <div className="relative right-80 top-56 -translate-x-9">35% -  Agile Development</div>
              <div className="relative right-80 top-60 -translate-x-9">30% -  Investor bandwidth</div>
              <div className="relative right-80 top-72 -translate-x-9 -translate-y-8">35% -  A/B testing </div>



            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
