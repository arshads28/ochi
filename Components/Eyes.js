import React, { useEffect, useRef, useState } from "react";
import math from "mathjs";

const Eyes = () => {
  let [rotate, setrotate] = useState(0);
  const [rotatea, setrotatea] = useState(0);
  useEffect(() => {
    let a = document.querySelector("#sat");
    a.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - innerWidth / 2.5;
      let deltaY = mouseY - innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);

      let deltaXa = mouseX - innerWidth / 1.5;
      let deltaYa = mouseY - innerHeight / 2;
      let anglea = Math.atan2(deltaYa, deltaXa) * (180 / Math.PI);
      setrotatea(anglea - 180);
    });
  });

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="1"
        className="eyes w-full h-full flex justify-center items-center   overflow-hidden"
      >
        <div
          id="sat"
          className=" flex justify-center items-center w-full h-screen bg-cover  bg-center bg-[url('https://wallpaperaccess.com/full/2364379.jpg')]"
        >
          <div className=" w-[40vw] h-[40vw] flex  items-center gap-4 justify-center  ">
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-zinc-500  rounded-full ]">
              <div className=" relative w-2/3 h-2/3 bg-zinc-950  rounded-full ]">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5  "
                >
                  <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-1/2 bg-zinc-500  rounded-full ]">
              <div className="relative w-2/3 h-2/3 bg-zinc-950  rounded-full ]">
                <div
                  style={{
                    transform: `translate(-50%,-50%) rotate(${rotatea}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 "
                >
                  <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
