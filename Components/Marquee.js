import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".2"
        className="w-screen py-10   bg-green-500 rounded-tl-3xl rounded-tr-3xl "
      >
        <div className="text  flex border-t-2 border-b-2  border-zinc-300 whitespace-nowrap">
          <div className="flex w-screen">
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-[10vw] leading-none  "
              data-line="0"
            >
              we are ktm &nbsp;
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-[10vw] leading-none  "
              data-line="1"
            >
              we are ktm &nbsp;
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-[10vw] leading-none "
              data-line="2"
            >
              we are ktm &nbsp;
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
