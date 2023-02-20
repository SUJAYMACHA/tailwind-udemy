import {
  faArrowRight,
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const gallery = () => {
  return (
    <div className="flex justify-center min-h-screen p-28 flex-col">
      <div className="text-black  gap-6 flex flex-row justify-end text-inherit -translate-y-14 ">
        <button>
          {" "}
          <div className="hover:underline-offset-8 hover:underline duration-500">
            vectors
          </div>
        </button>

        <button>
          {" "}
          <div className="hover:underline-offset-8 hover:underline duration-500">
            Illustrations
          </div>
        </button>

        <button>
          {" "}
          <div className="hover:underline-offset-8 hover:underline duration-500">
            Images
          </div>
        </button>

        <button>
          {" "}
          <div className=" hover:underline-offset-8 hover:underline duration-500">
            Icons
          </div>
        </button>
      </div>

      <div className="flex flex-col justify-start ">
        <div className="flex flex-row gap-x-96 p-6 ">
        <div className="flex flex-row">
          <input
            
            className="text-start text-black text-sm w-96 border-b-2 border-black border-opacity-20"
            placeholder="search "
            
          />
          <button> <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black w-5" /> </button>
          </div>
          <button>
            <div className=" translate-x-80  ">
              <div className="bg-black text-white hover:bg-white hover:text-black hover:border-black hover:border rounded-lg p-4 w-44">
                {" "}
                upload
              </div>{" "}
            </div>
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          <img src="/images/image1.jpg" className="max-w-lg h-48"></img>
          <img src="/images/image2.jpg" className="max-w-lg h-48"></img>
          <img src="/images/image3.jpg" className="max-w-lg h-48"></img>
          <img src="/images/image4.jpg" className="max-w-lg h-48"></img>
          <img src="/images/image5.jpg" className="max-w-lg h-48"></img>
          <img src="/images/image6.jpg" className="max-w-lg h-48"></img>
        </div>
      </div>
    </div>
  );
};

export default gallery;
