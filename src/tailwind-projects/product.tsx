import React from "react";
import {
  faArrowRight,
  faCircleXmark,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const product = () => {
  return (
 
    <div className=" h-screen ">
      <div className="flex justify-center mt-24 p-24 mr-16 ml-16 w-auto h-auto ">
        <div className=" flex flex-row p-12 rounded-xl border bg-white shadow-2xl">
          <div className="bg-white flex flex-row gap-4 mt-4 ">
            <img src="/images/headphone.png" className=" w-72 h-60 "></img>
          </div>
          <div className="flex flex-col p-4 ">
            <div className="bg-black rounded-xl text-white w-28 flex justify-center">
              {" "}
              Free Shipping
            </div>

            <div className="text-black text-2xl font-medium pt-2">
              Razer Kraken Kitty Edt Gaming
            </div>
            <div className="text-black text-2xl font-medium mb-2 ">
              Headset Quartz
            </div>
            <div className="line-through text-black">$799</div>
            <div className="text-black text-5xl font-bold p-4 mr-2">$599</div>
            <div className="text-gray-400 pb-4">
              This offer is valid until April 3rd or as long as stock lasts!
            </div>
            <button>
              <div className="bg-blue-400 text-white border-b-8 border-blue-600 rounded-lg p-4 hover:bg-blue-600 duration-500 ">
                <div className="hover:translate-y-2 duration-150">
                  {" "}
                  Add to cart
                </div>
              </div>
            </button>
            <div className="flex flex-row items-center gap-2 p-4 mr-2">
              <FontAwesomeIcon
                icon={faCircle}
                className=" hover:-translate-y-2 duration-75 text-green-400"
              />
              <div className="text-black">50+ pcs. in stock</div>
            </div>
            <div className="flex flex-row gap-8 p-1 justify-start">
              <button>
                <div className="border border-gray-300 flex flex-row items-center justify-center w-40 p-2 gap-3 hover:-translate-y-2 duration-75 shadow-black hover:shadow-lg rounded-lg">
                  <img src="/images/weight.png" className="h-8 w-8" />
                  Add to cart
                </div>
              </button>
              <button>
                <div className="border border-gray-300 flex flex-row items-center justify-center w-44 p-2 gap-3 hover:-translate-y-2 duration-75 shadow-black hover:shadow-lg rounded-lg">
                  <img src="/images/heart.png" className="h-8 w-8" />
                  Add to Wishlist
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default product;
