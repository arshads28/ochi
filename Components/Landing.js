import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {
  return (
    <>
      <div className="w w-full h-screen bg-zinc-950  pt-1">
        <div className="textstructure mt-24 ml-20">
          {["we create ", " eye-opening ", " Presentations "].map((Item, i) => {
            return (
              <div key={i} className="MASKER">
                <div className=" w-fit flex">
                  {i === 1 && (
                    <div className=" w-14 h-10 bg-green-400 relative top-1"></div>
                  )}
                  <p className="  tracking-tight uppercase leading-14 text-5xl font-semibold">
                    {Item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className=" border-t-[1px] mt-20 flex justify-between
      items-center py-3 px-5   "
        >
          {[
            " For Public and Private Companies ",
            " From the first pitch to the last pitch ",
          ].map((item, i) => {
            return <p key={i}>{item}</p>;
          })}
          <div className="start flex justify-between items-center">
            <div className=" px-3 border-2 rounded-full bg-zinc-500 font-light text-s capitalize  ">
              Start the project
            </div>
            <div className=" w-8  h-8 border-2 rounded-full ">
              <span className=" rotate-45">
                <FaLongArrowAltUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
