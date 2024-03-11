import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className=" w-full py-20 bg-yellow-200 rounded-tl-3xl rounded-tr-3xl "
    >
      <h1 className=" text-black">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className=" w-full   border-t-2 border-yellow-300">
        <div className=" w-full flex gap-40  justify-between ">
          <div>
            <h1 className=" px-10 py-5 bg-zinc ml-1 mt-2 text-black bg-yellow-300/75 rounded-2xl">
              Our approach:
            </h1>
            <button className="  bg-zinc-900 px-8 ml-6 py-3 mt-2 rounded-2xl ">
              {" "}
              READ MORE
            </button>
          </div>
          <div className=" w-[50vh] h-[60vh] bg-red-500 rounded-3xl  m-2 flex justify-center items-center">
            img
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
