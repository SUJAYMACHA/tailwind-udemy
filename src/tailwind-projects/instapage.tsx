import React from "react";

const instapage = () => {
  return (
    <div>
      <div className="bg-black text-white sm:bg-yellow-300 lg:bg-white h-screen w-screen">
        {" "}
        <div className="flex flex-row justify-around">
          <div className="columns-2 gap-4 m-10 pr-50 pl-50 flex flex-row justify-center ">
          
            <div className="third flex flex-none flex-col">
              <div className="border text-black text-center w-80 h-80 flex flex-col  items-center m-3 border-black">
                <div className="m-10 italic pl-10 pr-10">INSTAGRAM</div>
                <div className="box flex flex-col gap-1">
                  <input
                    className="border border-slate-300 "
                    placeholder="username"
                  />
                  <input
                    className="border border-slate-300 "
                    placeholder="password"
                    type="password"
                  />
                  <button>
                    {" "}
                    <div className="flex flex-row text-black justify-end hover:bg-white">
                      show
                    </div>{" "}
                  </button>
                  <button>
                    {" "}
                    <div className="border border-sky-400 rounded-md bg-sky-400 hover:bg-white text-black">
                      {" "}
                      LogIn
                    </div>
                  </button>
                </div>
                <button>
                  {" "}
                  <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    {" "}
                    sign-up{" "}
                  </div>{" "}
                </button>
                <button>
                  {" "}
                  <div className="text-black m-3">Forgotten password?</div>
                </button>
              </div>

              <button>
                {" "}
                <div className="border text-center w-80 h-10 flex flex-col items-center m-3 text-sky-400 border-black">
                  {" "}
                  get the app
                </div>
              </button>
              <div className="pics h-22 w-32 flex flex-row ml-2 columns-2 gap-10">
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default instapage;
