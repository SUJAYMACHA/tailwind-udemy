import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const template = () => {
  return (
    <div className="bg-blue-200 h-screen flex items-center justify-center ">
      <div className=" rounded-3xl shadow-xl">
        <div className="relative">
          <img
            src="/images/iconbro.jpeg"
            className="top-0 left-2 text-xl absolute mt-1"
          ></img>
          <div className="rounded-lg bg-blue-800 text-lg absolute left-14 flex flex-row text-white p-1 gap-1 mt-1">
            <div className="text-sky-400">
              <FontAwesomeIcon icon={faStar} />
            </div>
            3.0
          </div>

          <span className="absolute bottom-0 left-0 text-white text-2xl font-bold">
            Sí, sabes que ya llevo un rato mirándote Tengo que bailar contigo
            hoy
          </span>

          <img
            src="/images/whales.jpg"
            className="h-48 w-96 object-cover shadow-sm shadow-sky-400 rounded-t-lg"
          />
        </div>

        <div className="bg-sky-400 p-3 flex flex-row gap-4">
          <img src="/images/cal.jpeg" className="h-8 w-8" />
          <div className="flex flex-col">
            <div className="text-white font-thin text-sm">a apr a sett</div>
            <div className="text-white font-medium text-sm">
              7 settembre- 9 dicembre
            </div>
          </div>
          <img src="/images/loc.jpeg" className="h-10 w-8" />
          <div className="text-white font-bold text-lg">
            <div>italia:</div>
            <div>svizzera</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white p-4 rounded-b-3xl relative w-96 flex flex-row gap-24">
            <img
              src="/images/iconbro.jpeg"
              className="top-2 left-0 text-xl absolute mt-1 ml-4"
            />
            <img
              src="/images/iconbro.jpeg"
              className="top-2 left-4 text-xl absolute mt-1 ml-4"
            />

            <img
              src="/images/iconbro.jpeg"
              className="left-8 m-1 text-2xl absolute top-2 text-black font-extrabold ml-4"
            />

            <div className="mt-10 text-black font-bold text-sm ">
              <div>+340 viaggiatori </div>
              <div className="font-extralight text-black text-sm">
                <div>Hanno pretotato</div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="text-slate-400 text-xl flex flex-row justify-end">
                A PATIRE DE{" "}
              </div>
              <span className="text-red-700 font-bold text-4xl border-1 flex flex-row ">
                22.
                <div className="text-red-700 font-bold text-5xl">35</div>
                <div className="text-red-700 font-bold text-4xl border-1 ">
                  0$
                </div>{" "}
              </span>
              <div className="text-slate-400 text-lg flex justify-end">
                a persona
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default template;
