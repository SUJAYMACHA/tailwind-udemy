import { HeaderLogo } from "./common-components/HeaderLogo";


<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
  rel="stylesheet"
></link>;


interface BlogHeader {

}

export const Blogheader = () => {
  return (
    <div className=" p-8 gap-10">



     <HeaderLogo 
     logoShape="./Logoshape.svg"
     logoColor="secondary"
     logoName="Boldo"
     />


      <div className="gap-12 justify-end -translate-y-10  flex-row  text-[#0A2640] font-sans  text-base font-semibold flex items-center    ">

          <div className="">Product</div>
          <div className="">Services</div>
          <div className=" ">About</div>
          <button>
            <div className="rounded-3xl pl-10 pr-10 pb-2 pt-2  border-[#0A2640] border-2 text-[#0A2640] flex flex-row gap-2">
              <div className="">Login</div>
              <div>In</div>
            </div>
          </button>
        </div>



    </div>
  );
};
