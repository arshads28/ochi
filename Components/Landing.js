import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const Landing = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "keyframes",
        duration: 1,
        stiffness: 200000,
        damping: 10,
      }}
      className="w w-full h-screen bg-zinc-950  pt-[20vh]"
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="w w-full h-screen bg-zinc-950  pt-1"
      >
        <div className="textstructure mt-24 ml-20">
          {["we create ", " eye-opening ", " Presentations "].map((Item, i) => {
            return (
              <div key={i} className="MASKER">
                <div className=" w-fit flex overflow-hidden">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "10vw" }}
                      transition={{ ease: [5, 8, 2, 5], duration: 1 }}
                      className=" w-14 h-10 bg-red-500 relative top-1"
                    ></motion.div>
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
    </motion.div>
  );
};

export default Landing;
