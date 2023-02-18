import React from "react";

const cards = () => {
  return (
    
    <div className="flex bg-slate-800 min-h-screen justify-center items-center ">
      <div className="flex flex-row gap-6 justify-between ">
        <div className=" border-8 flex items-center flex-col p-5  text-white text-sm rounded-lg border-slate-700">
          <div className="">
            <div className="p-4">BASIC</div>
          </div>
          <div className="font-serif text-5xl"> 100GB</div>
          <div className="p-2">$1.99/Month</div>
          <button>
            <div className="p-6">
              <div className="border pl-8 pr-8 pt-3 pb-3 border-purple-700 hover:bg-purple-600 duration-500 text-white rounded-lg ">
                {" "}
                Purchase{" "}
              </div>
            </div>
          </button>
          <div className="border-t-2 p-6 text-sm">
            <div className="p-1">100 GB of storage</div>
            <div className="p-1">Option to add members</div>
            <div className="p-1">Extra member benefits</div>
          </div>
        </div>

        <div className=" border-violet-700 flex items-center flex-col p-5 text-white text-sm rounded-lg border-8 ">
          <div className="">
            <div className="p-4">STANDARD</div>
          </div>
          <div className="font-serif text-5xl"> 200GB</div>
          <div className="p-2">$3.99/Month</div>
          <button>
            <div className="p-6">
              <div className="border pl-8 pr-8 pt-3 pb-3 border-purple-600 bg-violet-600 hover:bg-purple-800 duration-500 text-white rounded-lg ">
                {" "}
                Purchase{" "}
              </div>
            </div>
          </button>
          <div className="border-t-2 p-5 text-sm">
            <div className="p-1">200 GB of storage</div>
            <div className="p-1">Option to add members</div>
            <div className="p-1">Extra member benefits</div>
          </div>
        </div>
        <div className="  flex items-center flex-col p-5  text-white text-sm rounded-lg border-slate-700 border-spacing-10 border-8">
          <div className="">
            <div className="p-4">PREMIUM</div>
          </div>
          <div className="font-serif text-5xl"> 2 TB</div>
          <div className="p-2">$8.99/Month</div>
          <button>
            <div className="p-6">
              <div className="border pl-8 pr-8 pt-3 pb-3 border-purple-600 hover:bg-purple-600 duration-500 text-white rounded-lg ">
                {" "}
                Purchase{" "}
              </div>
            </div>
          </button>
          <div className="border-t-2 p-5 text-sm">
            <div className="p-1">2 TB of storage</div>
            <div className="p-1">Option to add members</div>
            <div className="p-1">Extra member benefits</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cards;
