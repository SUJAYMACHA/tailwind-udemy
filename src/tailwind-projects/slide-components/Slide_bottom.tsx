import React from "react";
interface Slide_bottomprops {
  slidenumber: string;
  name: string;
  topic: string;
  title: string;
  date: string;
}
export const Slide_bottom = (props: Slide_bottomprops) => {
  return (
    <div className="flex flex-row justify-around pt-2  text-black text-lg">
      <div className="flex font-bold -translate-x-">{props.slidenumber}</div>
      <div className="flex gap-10 translate-x-14 ">
        <div className="">{props.name}</div>
        <div className=" font-bold">{props.topic}</div>
      </div>
      <div className="flex gap-10 translate-x-10  ">
        <div className="">{props.title}</div>
        <div className=" font-bold">{props.date}</div>
      </div>
    </div>
  );
};
export default Slide_bottom;
