import React from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Header } from "./whatsapp-components/Header";
import { Card } from "./whatsapp-components/Card";
<link
  href="https://fonts.googleapis.com/css2?family=Helvetica+Neue&display=swap"
  rel="stylesheet"
></link>;

const Whatsappweb = () => {
  return (
    <div>
      <div className="md:flex md:flex-col md:flex-wrap w-full ">
        <Header></Header>

        <div className="bg-[#e6ffda]  flex flex-col">
          <div className="lg:flex lg:flex-row  lg:gap-96 lg:p-20 flex flex-start flex-wrap mb-8   ">
            <div className="font-sans lg:text-6xl lg:font-normal lg:ml-36 tracking-tight text-3xl font-normal  p-4 ml-2 translate-y-12 lg:p-8">
              Download
              <div className="lg:font-sans font-sans md:text-6xl lg:font-normal tracking-tight text-3xl font-normal ">
                WhatsApp
              </div>
            </div>

            <div className=" text-lg flex flex-col ml-2 md:p-4 md:translate-y-20 -translate-x-28 translate-y-12 p-4 ">
              <div className="tracking-tight ">
                Stay connected on WhatsApp across your devices so,
              </div>
              <div className="tracking-tight ">
                you can pick up any conversation where you left off.
              </div>
              <div className="flex flex-row tracking-tight ">
                <div className="text-xs mt-8 flex">
                  By installing WhatsApp, you agree to our{" "}
                  <div className="underline">Terms</div> &{" "}
                  <div className="underline"> Privacy Policy.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="lg:flex md:flex lg:flex-row lg:items-center lg:gap-8 lg:justify-center lg:text-white lg:mb-4  flex-col text-white justify-center items-center flex gap-8 pb-4 pt-4  ">
              {/* <div className="bg-[#111b21] rounded-3xl w-64 p-8  hover:bg-[#25d366] hover:text-black">
                <h2 className="font-normal text-sm flex justify-center mb-2">
                  Mobile & Tablet
                </h2>
                <div className="text-5xl text-bold flex justify-center mb-6">
                  Android
                </div>
                <div className="text-xs mb-20">
                  Minimum Requirements (Version 2.22.13.77) Android OS 4.0.3 or
                  above
                </div>
                <button>
                  <img src="/images/googleplay.jpg" className="  "></img>
                </button>
              </div> */}

              <Card
                cardTitle="Mobile & Tablet"
                os="Android"
                description=" Minimum Requirements (Version 2.22.13.77) Android OS 4.0.3 or
                  above"
                image="/images/googleplay.jpg"
              />
              <Card
                cardTitle="Mobile"
                os="iOS"
                description=" Minimum Requirements (Version 2.22.13.77) Android OS 4.0.3 or
                  above"
                image="/images/appleicon.svg"
              />

              <Card
                cardTitle="Desktop"
                os="Windows"
                description=" Requires Windows 10 or newer. For all other operating systems,
                you can use WhatsApp Web in your browser."
                image="/images/microsoft.jpg"
              />

              {/* <div className="bg-[#111b21] p-8 rounded-3xl w-64 hover:bg-[#25d366] hover:text-black">
                <h2 className="font-normal text-sm flex justify-center mb-2">
                  Mobile
                </h2>
                <div className="text-5xl text-bold flex justify-center mb-6">
                  iOS
                </div>
                <div className="text-xs mb-20">
                  Minimum Requirements (Version 2.22.13.77) Android OS 4.0.3 or
                  above
                </div>
                <button>
                  <img
                    src="/images/appleicon.svg"
                    className=" h-16 w-40 mt-2 ml-3  "
                  ></img>
                </button>
              </div>

              <div className="bg-[#111b21] pb-4 pt-11 p-6  rounded-3xl  w-64 hover:bg-[#25d366] hover:text-black lg:bg-[#111b21]">
                <h2 className="font-normal text-sm flex justify-center mb-2">
                  Desktop
                </h2>
                <div className="text-5xl text-bold flex justify-center mb-6">
                  Windows
                </div>
                <div className="mb-20 text-xs">
                  Requires Windows 10 or newer. For all other operating systems,
                  you can use WhatsApp Web in your browser.
                </div>
                <button>
                  <img
                    src="/images/microsoft.jpg"
                    className="w-40 ml-6 h-14 mt-6 "
                  ></img>
                </button>
              </div> */}
            </div>
            <div className="text-black text-lg p-4 flex flex-wrap justify-center gap-1 ">
              Visit <div className="underline"> whatsapp.com/dl</div> on your
              mobile phone to install.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-row">
        <div>Already</div>
        <div>Downloaded?</div>
      </div>
    </div>
  );
};

export default Whatsappweb;
