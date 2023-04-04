import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface TemplateProps {
  picture: string;
  title: string;
  Description: string;
  Description2: string;
  button: string;
}
export const Template = (props: TemplateProps) => {
  return (
    <div className="flex flex-col justify-start gap-2 ">
      <img src={props.picture} className="h-80 w-60 mb-2"></img>
      <div className="font-sans text-black text-2xl mb-2 mr-8 ">{props.title}</div>
      <div className="text-[#777777] text-sm mr-5 ">{props.Description}</div>
      <div className="text-[#777777] text-sm mr-16  ">{props.Description2}</div>
      <button className="text-[#0A2640] underline underline-offset-8  decoration-[#0A2640] mr-32 ">
        {props.button}
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
  );
};
