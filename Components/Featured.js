import React from "react";

const Featured = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.2"
      className=" w-full h-screen bg-zinc-800 py-10"
    >
      <div className=" w-full px-20 border-b-[1px] border-zinc-600 pd-20 ">
        <h1 className=" text-4xl">Featured Project</h1>
      </div>
    </div>
  );
};

export default Featured;
