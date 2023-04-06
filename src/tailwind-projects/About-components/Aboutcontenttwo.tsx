import { Aboutcard } from "./Aboutcard";

export const Aboutcontenttwo = () => {
  return (
    <div className="flex flex-col justify-center items-center translate-y-56   ">
    <div className="flex flex-col  p-12 gap-5 items-start">
      <div className="text-[#777777] text-2xl">Our Team</div>
      <div className="text-black text-5xl">The leadership team</div>
      <div className="text-[#777777] translate-y-4 text-xl pb-16">
        Conversion angel investor entrepreneur first mover advantage. Handshake
       {" "}
       <div> infographic mass market crowdfunding iteration. Traction stock user
        experience </div>
        <div>deployment beta innovator incubator focus.</div>
      </div>
    <div className="flex flex-row gap-16">
    <Aboutcard
    picture="man1.png"
    title="Michael Scott"
    designation="General Manager"

    />
    <Aboutcard
    picture="man4.png"
    title="Dwight Schrute"
    designation="General Manager"

    />
    <Aboutcard
    picture="man5.png"
    title="Pam Beetsley"
    designation="General Manager"

    />
    </div>
    </div>
    </div>
  );
};
