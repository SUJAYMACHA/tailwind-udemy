export const Slidenine = () => {
  return (
    <div className="flex flex-col items-center justify-center p-24 gap-8">
      <button className="flex justify-center items-center rounded-full bg-black text-white text-lg p-4 pr-8 pl-8 font-semibold hover:border hover:border-black hover:bg-white hover:text-black">
        Macha Sujay
      </button>
      <div className="flex flex-row items-center justify-center gap-36">
        <img src="lastslide.jpg" />
        <div className="flex flex-col font-bold text-black text-8xl">
          <div className=" ">Thank</div>
          <div className=" ">You!</div>
        </div>
      </div>
      <button className="flex justify-center items-center translate-x-2 gap-2 rounded-full border-[#1E1E1E] border bg-white text-[#1E1E1E] text-lg p-2 pl-8 pr-8 hover:border hover:border-black hover:bg-black hover:text-white">
        Portfolio
      </button>
    </div>
  );
};
export default Slidenine;
