import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div className="w-full py-10   bg-green-500 rounded-tl-3xl rounded-tr-3xl ">
        <div className="text  flex border-t-2 border-b-2  border-zinc-300 whitespace-nowrap">
          <div>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-[10vw] leading-none "
            >
              we are ochi we are ochi
            </motion.h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
