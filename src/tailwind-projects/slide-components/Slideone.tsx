import React from 'react';

const Slideone = () => {
  return (
    
    <div className=" flex flex-col justify-center items-center ">
      <div className="gap-96 items-center flex flex-row">
        <div className=" -translate-x-28 -translate-y-10">
          <button className="flex justify-center rounded-full bg-black text-white text-lg p-3 pr-6 pl-6 hover:border hover:border-black hover:bg-white hover:text-black">
            Portfolio
          </button>
        </div>
        <div className="flex gap-2 flex-col translate-x-44 translate-y-12 text-black text-8xl font-bold">
          <div className="">MACHA</div>
          <div className="">SUJAY</div>
          <div className="pt-6">
            <button className="flex justify-center  rounded-full border-[#1E1E1E] border bg-white text-[#1E1E1E] text-lg p-2 pl-8 pr-8 hover:border hover:border-black hover:bg-black hover:text-white">
              Brand Identity Design
            </button>
          </div>
        </div>
      </div>
      <img src="./sujay.jpg" className="rounded-lg h-96 w-80
       -translate-x-96"/>
    </div>
    
  );
};
export default Slideone;