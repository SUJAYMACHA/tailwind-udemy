import { Buttons } from "../common-components/Buttons";

export const Firstcontent = () => {
  return (
    <div className=" p-24 flex flex-row gap-72 -translate-y-96  ">
      <div className="flex flex-col gap-6">
        <img src="./images/text1.png" />
        <div className=" text-white mb-10">
          <div>
            Funding handshake buyer business-to-business metrics iPad
            partnership.
          </div>
          <div>
            First mover advantage innovator success deployment non-disclosure.
          </div>
        </div>
        <div className=" flex flex-row gap-10 ">
          <button>
            <div className="rounded-full bg-[#65E4A3] p-4 pr-24 pl-24 font-semibold ">
              Buy template
            </div>
          </button>
          <button>
            <div className="rounded-full bg-transparent border-2 border-white p-4 pr-10 pl-10 text-white">
              Explore
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-[#456079] rounded-lg p-20 w-96 h-64 -translate-y-16">
          <Buttons></Buttons>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row ">
              <div className="bg-[#95ABBC] rounded-xl w-16  h-3 relative right-12 bottom-12"></div>
              <div className="bg-[#8FB6D5] rounded-xl w-24 h-3 relative right-7 bottom-12"></div>
              <div className="-translate-y-12 bottom-1 relative right-4 text-xs text-white">
                80%
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="bg-[#95ABBC] rounded-xl w-16 h-3 relative right-12 bottom-12"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-16 h-3  relative right-9 bottom-12"></div>
              <div className="text-xs relative bottom-12 text-white -translate-y-0.5">
                30%
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="bg-[#95ABBC] rounded-xl w-32 h-3 relative right-12 bottom-12"></div>
              <div className="bg-white rounded-xl h-3 w-72 relative bottom-12 right-6"></div>
              <div className="text-xs text-white relative bottom-12 -translate-y-0.5">
                100%
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="bg-[#95ABBC] rounded-xl w-16 h-3 relative right-12 bottom-12"></div>
              <div className="bg-[#65E4A3] rounded-xl h-3 w-24 relative bottom-12 right-7"></div>
              <div className="text-xs text-white relative bottom-12 -translate-y-0.5">
                75%
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="bg-[#456079] rounded-lg p-20 w-48 h-44 ">
            <Buttons></Buttons>
            <div className="flex flex-row">
              <div className="bg-[#0DBBFC] rounded-xl w-4 h-8 relative right-14"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-4  h-4 relative right-12 "></div>
              <div className="bg-[#0DBBFC] rounded-xl w-4 h-14 bottom-12  relative right-8"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-4 h-10 bottom-8 translate-x-2   relative right-8"></div>
              <div className="bg-[#95ABBC] rounded-xl w-4 h-20 bottom-20  translate-x-4 translate-y-2 relative right-8"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-3 h-12 bottom-10 translate-x-6 relative right-8"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-3 h-16 bottom-14 translate-x-8 relative right-8"></div>
              <div className="bg-[#0DBBFC] rounded-xl w-3 h-6  bottom-4 translate-x-10 relative right-8"></div>
            </div>
          </div>

          <div className="flex flex-row relative left-16 top-4 gap-2 ">
            <div className="bg-[#f45800] relative rounded w-2 h-2 "></div>
            <div className="bg-[rgb(236,170,0)] rounded w-2 h-2"></div>
            <div className="bg-[#009D10] rounded w-2 h-2 "></div>
          </div>
          <img src="Frame.png" />
        </div>
      </div>
    </div>
  );
};
