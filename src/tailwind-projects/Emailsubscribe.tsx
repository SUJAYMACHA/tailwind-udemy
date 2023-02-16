import React from "react";

const Emailsubscribe = () => {
  return (
    <div>
      <div className="bg-zinc-700 flex justify-center h-screen items-center">
        <div className="bg-zinc-800 p-9 rounded-2xl  ">
          <div className="flex flex-row">
            <div className="flex p-1 bg-white border rounded w-48 h-48">
              <img
                src="https://mdbootstrap.com/img/new/standard/city/041.jpg"
                alt="..."
              />
            </div>
            <div className="hello">
              <div className="p-2">
                <div className=" text-white font-serif text-xl flex justify-center p-2 ">
                  Get diet and fitness tips in your inbox{" "}
                </div>

                <div className="flex">
                  <div className="text text-white flex text-xs p-1 ml-2 ">
                    {" "}
                    Eat better and exercise better. Sign up for{" "}
                  </div>
                </div>

                <div className="text text-white flex text-start text-xs ml-3 ">
                  Diet&Fitness newsletter.
                </div>
              </div>

              <div className="flex gap-3 p-2 justify-items-center">
                <input
                  className=" border-slate-300 bg-zinc-800 text-center p-3 placeholder-white text-white border-2 border-opacity-5 placeholder:text-zinc-700 text-sm ml-3"
                  placeholder="Enter your email address "
                />
                <button className="bg-lime-400 rounded-lg p-3 text-black hover:bg-lime-900 hover:text-white duration-500 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emailsubscribe;
