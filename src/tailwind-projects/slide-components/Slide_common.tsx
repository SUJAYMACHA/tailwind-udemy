import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


interface Slide_commonprops {
  title: string;
  titletwo: string;
  button: string;
  Description_title: string;
  Description: string;
  buttontwo: string;
  
}



export const Slide_common = (props: Slide_commonprops) => {
  return (
    <div className="flex flex-col gap-8 items-start translate-x-16 justify-start ">
      <div className="gap-0">
        <div className="text-4xl text-black flex font-bold ">{props.title}</div>
        <div className="text-4xl text-black flex font-bold ">
          {" "}
          {props.titletwo}
        </div>
      </div>

      <div className="flex justify-center items-center rounded-full bg-black text-white text-lg p-4 font-semibold border-black border hover:bg-white hover:text-black">
        {props.button}
      </div>
      <div className="bg-[#EBEBEB] text-base w-96 text-black flex-wrap p-4 rounded-xl">
      <div className=" text-xl w-96 font-bold text-black">
        {props.Description_title}
      </div>

      <div className=" pt-4">
        {props.Description}
      </div>
      </div>
      <div className="flex justify-center items-center translate-x-2 gap-2 rounded-full border-[#1E1E1E] border bg-white text-[#1E1E1E] text-lg p-2 pl-4 pr-4 hover:border hover:border-black hover:bg-black hover:text-white">
        {props.buttontwo}
        <div>
        <FontAwesomeIcon
        icon={faArrowRight} />
    </div>
      </div>
    </div>
  );
};
