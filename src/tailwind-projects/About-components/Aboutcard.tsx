

interface AboutcardProps {
  picture: string;
  title: string;
  designation: string;
}
export const Aboutcard = (props: AboutcardProps) => {
  return (
    <div className="flex flex-col justify-start gap-4 ">
      <img src={props.picture} className="h-72 w-60 mb-2"></img>
      <div className="font-sans text-black text-2xl mr-8 ">{props.title}</div>
      <div className="font-sans text-[#777777] text-xl">{props.designation}</div>
 </div>
    
  );
};
