import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Header = () => {
  return (
    <div className="bg-[#e6ffda] bg-opacity-95 z-10 md:w-screen   md:flex flex-row md:border-2 md:border-b lg:border-[#cec9c1] md:fixed  ">
      <button>
        <FontAwesomeIcon
          icon={faBars}
          className=" md:hidden translate-y-8 -translate-x-12"
        />
        <img
          src="/whatsapp icon.jpg"
          className=" md:w-44 md:p-4 md:translate-x-4 translate-x-36 w-36"
        ></img>

 <FontAwesomeIcon
          icon={faArrowDown}
          className="  rounded-full text-black"
        />
       
      </button>

      <div className=" md:gap-36 md:flex md:flex-row  md:items-center md:p-2 border-b b-[#cec9c1] font-normal     ">
        <div className="md:text-black md:justify-center md:items-center md:font-HelveticaNue md:font-base  md:flex md:flex-row md:translate-x-96 ">
          <button>
            <div className="md:flex md:flex-row md:gap-11 md:items-center">
              <div className="no-underline hover:underline hover:decoration-green-400 underline-offset-8 hidden lg:block">
                Features
                <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
              </div>
              <div className="no-underline hover:underline hover:decoration-green-400 underline-offset-8 hidden lg:block">
                Privacy
              </div>
              <div className="no-underline hover:underline hover:decoration-green-400 underline-offset-8 hidden lg:block ">
                Help Center
              </div>

              <div className="no-underline hover:underline hover:decoration-green-400 underline-offset-8 hidden lg:block">
                Blog
              </div>
              <div className="flex flex-row ml-36 gap-12 items-center">
                <div className="hidden lg:block">Whatsapp Web</div>
                <div className="rounded-full bg-[#25d366] p-4 hidden md:block hover:bg-[#111b21] hover:text-white border-black border ">
                  Download
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="translate-x-2 "
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
