<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
  rel="stylesheet"
></link>;

export const Headerone = () => {
  return (
    <div className="bg-[#0A2640] p-8 pr-96 pl-96 flex flex-row items-center justify-center w-full  ">
      <img
        src="Ellipse 9.png"
        className="relative bottom-8  opacity-95 bg-cover translate-x-96 left-96 ml-10  "
      />
      <div className="flex flex-row gap-16 relative right-96 -translate-x-64 bottom-48 ">
        <div className="flex flex-row gap-1">
          <div className="flex flex-col gap-1">
            <div className="bg-[#65E4A3] flex justify-start items-center rounded-r-full w-8  text-[#65E4A3]  ">
              h
            </div>

            <div className="bg-[#65E4A3] rounded-r-full w-10 text-[#65E4A3]   ">
              h
            </div>
          </div>
          <div className="text-white fonr-Manrope text-5xl font-normal  items-baseline">
            Boldo
          </div>
        </div>

        <div className="gap-12  flex-row translate-x-96 relative left-60 text-white font-sans  text-base font-semibold flex items-center justify-center   ">
          <div className="">Product</div>
          <div className="">Services</div>
          <div className=" ">About</div>
          <button>
            <div className="rounded-3xl pl-10 pr-10 pb-2 pt-2 bg-white text-[#0A2640] flex flex-row gap-2">
              <div className="">Login</div>
              <div>In</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
