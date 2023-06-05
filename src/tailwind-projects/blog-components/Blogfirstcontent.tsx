import { Blogtemplate } from "./Blogtemplate";

<link
  href="https://fonts.googleapis.com/css2?family=Manrope:wght@700&display=swap"
  rel="stylesheet"
></link>;

export const Blogfirstcontent = () => {
  return (
    <div className=" flex flex-col gap-10">
      <div className="text-[#0A2640] text-xl flex justify-center p-5">
        Our Blog
      </div>
      <div className="font-Manrope text-6xl text-[#0A2640] justify-center flex">
        Thoughts and Words
      </div>
      <div className="flex flex-row pt-7 justify-center items-center gap-36 border-b-2 5 pb-24  border-[#0A2640]">
        <img src="./blogpicone.png" className="h-80 w-96 pt-8" />
        <Blogtemplate
          title="Category"
          date="November 22, 2021"
          Description="Pitch termsheet backing validation "
          Descriptiontwo="focus release."
          icon="girlicon.png"
          name="Chandler Bing"
        ></Blogtemplate>
      </div>
    </div>
  );
};
