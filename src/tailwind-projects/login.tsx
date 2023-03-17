import { faArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const login = () => {
  return (
    <div className="bg-rose-50 min-h-screen p-36">
      <div className=" flex justify-center flex-row items-center">
        <div className=" flex   p-4 bg-white rounded drop-shadow-xl">
          <div className="flex flex-col p-20">
          <div className=" font-mono text-4xl font-bold mb-5">Log In</div>
          <div className="text-gray-600 ml-1 ">
            Log in to your account to upload or download
          </div>
          <div className="text-gray-600 ml-1">pictures, videos or music.</div>
          <div className="p-8">
            <input
              className=" border-gray-300 text-start p-6 w-full  text-black border text-sm  rounded-md placeholder:pl-4 mr-4 -translate-x-6"
              placeholder="Enter your email address "
            />
          </div>



          <div className="flex gap-4 flex-col">
            <div className="flex flex-row gap-8 items-center ">
              <div className="text-cyan-600 ml-2"> Forgot Password </div>
              <div className="flex">
                <button className="flex gap-2 items-center bg-cyan-700 text-white border rounded-lg w-full p-6 pr-12 pl-12 hover:bg-cyan-400 translate-x-6 hover:-translate-y-1 duration-75">
                  <p>Next</p>
                  <FontAwesomeIcon icon={faArrowRight} className="text-white w-5" />
                </button>
                
              </div>
            </div>
            <div className="p-4 border-t-2 border-gray-300 flex flex-col items-center text-gray-400   ">
              <div>or log in with</div>
            </div>
          </div>



          <div className="flex flex-row gap-4 items-center justify-center ">
            <button>
              <div className="border border-gray-300 flex flex-row items-center justify-center w-40 p-2 gap-2 hover:-translate-y-2 duration-75 shadow-black hover:shadow-lg rounded-lg">
                <img src="/images/facebook.png" className="h-8 w-8" />
                <div className=""> Facebook</div>
              </div>
            </button>
            <button>
              <div className="border border-gray-300 flex flex-row items-center justify-center w-40 p-2 gap-3 hover:-translate-y-2 duration-75 shadow-black hover:shadow-lg rounded-lg">
                <img src="/images/google.png" className="h-8 w-8" />
                Google
              </div>
            </button>
            </div>
          </div>
          <div className="flex">
            <img src="/images/water.jpg" className="h-102 w-96"></img>
            <FontAwesomeIcon icon={faCircleXmark} className="text-black w-5" />
          </div>
          
        </div>



       
      </div>
    </div>
  );
};

export default login;
