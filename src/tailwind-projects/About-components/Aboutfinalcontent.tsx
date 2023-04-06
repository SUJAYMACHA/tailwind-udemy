import { Aboutlastcard } from "./Aboutlastcard"

export const Aboutfinalcontent = () =>{
    return(
       
        <div className="flex flex-col justify-center items-center translate-y-56 bg-[#0A2640]   ">
        <div className="flex flex-col  p-12 gap-5 items-start">
          <div className="text-[white] text-2xl">Our Team</div>
          <div className="text-white text-5xl">The leadership team</div>
          <div className="text-[white] translate-y-4 text-xl pb-16">
            Conversion angel investor entrepreneur first mover advantage. Handshake
           {" "}
           <div> infographic mass market crowdfunding iteration. Traction stock user
            experience </div>
            <div>deployment beta innovator incubator focus.</div>
          </div>
          </div>
          <div className=" flex flex-col gap-20 mb-10">
          <Aboutlastcard
          picture="lastblue.png"
          title="We are commited."
          description="Conversion angel investor entrepreneur first mover advantage."
          description2="Handshake infographic mass market crowdfunding iteration. "

          />
            <Aboutlastcard
          picture="lastgreen.png"
          title="We are responsible."
          description="Conversion angel investor entrepreneur first mover advantage."
          description2="Handshake infographic mass market crowdfunding iteration. "

          />
            <Aboutlastcard
          picture="lastppl.png"
          title="We aim progress."
          description="Conversion angel investor entrepreneur first mover advantage."
          description2="Handshake infographic mass market crowdfunding iteration. "

          />
          </div>
          </div>
    )
}