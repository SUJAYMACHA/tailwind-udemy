

interface AboutlastcardProps {
    picture: string;
    title: string;
    description: string;
    description2: string;

  }
  export const Aboutlastcard = (props: AboutlastcardProps) => {
    return (
      <div className="flex flex-row justify-start gap-6 items-center  ">
        <img src={props.picture} className="h-40 w-40 mb-2"></img>
        <div className="flex flex-col">
        <div className="font-sans text-white text-lg mr-8 ">{props.title}</div>
    
        <div className="font-sans text-[white] text-xl mt-4">{props.description}</div>
        <div className="font-sans text-[white] text-xl ">{props.description2}</div>
        

        </div>
   </div>
      
    );
  };
  