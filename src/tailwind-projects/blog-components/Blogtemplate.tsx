interface BlogtemplateProps {
  title: string;
  date: string;
  Description: string;
  Descriptiontwo: string;

  icon: string;
  name: string;
}
export const Blogtemplate = (props: BlogtemplateProps) => {
  return (
    <div className="flex flex-col justify-start gap-4 ">

      <div className="flex flex-row gap-4 ">
        <div className="font-sans text-[#0A2640] text-xl font-bold ">
          {props.title}
        </div>
        <div className="text-[#777777] text-base font-sans font-normal translate-y-0.5">
          {props.date}
        </div>
      </div>
      <div className="gap-2 mb-8">
        <div className="text-[#0A2640] text-4xl font-sans">
          {props.Description}
        </div>
        <div className="text-[#0A2640] text-4xl font-sans">
          {props.Descriptiontwo}
        </div>
        
      </div>
      <div className="flex flex-row gap-4 items-center">
        <img src={props.icon} className=" h-8 w-8"></img>
        <div className=" text-black text-base font-sans"> {props.name}</div>
      </div>
    </div>
  );
};
