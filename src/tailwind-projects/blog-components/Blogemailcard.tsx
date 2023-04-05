export const Blogemailcard = () => {
    return (
    
      <div className="text-black border-2 bg-[#0A2640] border-black p-8 -translate-y-24 w-4/5   rounded-lg h-96   ">
        <div className="flex justify-end">
          <img
            src="./Ellipse 9.png"
            className="relative w-80 h-72 bottom-8 left-8 bg-cover rounded-lg "
          />
        </div>
        <div className=" -translate-y-60 flex justify-center flex-col items-center">
          <div className=" font-Manrope text-5xl text-white"> 
            An enterprise template to ramp{" "}
          </div>
          <div className=" font-Manrope text-5xl text-white">
            up your company website.
          </div>
        </div>
        <div className="flex justify-center items-center -translate-y-48 gap-8">
          <input
            className="bg-white p-4 pl-12 pr-20 border-black rounded-full placeholder:text-black "
            placeholder="Your email address"
          ></input>
          <button>
            <div className="rounded-full bg-[#65E4A3] p-4 pl-16 pr-16">
              Start now
            </div>
          </button>
        </div>
      </div>
      
    );
  };
  