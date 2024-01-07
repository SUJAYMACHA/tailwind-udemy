import { Text } from "../common-components/Text";

interface Cardprops {
  cardTitle: string;
  description: string;
  os: string;
  image: string;
}

export const Card = (props: Cardprops) => {
  return (
    <div className="bg-[#111b21] rounded-3xl w-64 p-8 md:flex md:flex-col md:items-center  hover:bg-[#25d366] hover:text-black">
      <h2 className="font-normal text-sm flex justify-center mb-2">
        {props.cardTitle}
      </h2>
      <div className="text-5xl text-bold flex justify-center mb-6">
        {props.os}
      </div>
      <div className="text-xs mb-20">
        <Text text={props.description} type="small" side={4} />
      </div>
      <button>
        <img src={props.image} alt="" className=" h-16"></img>
      </button>
    </div>
  );
};
