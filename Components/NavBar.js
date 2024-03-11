import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <>
      <div className=" fixed z-[1] w-full px-14 py-6 flex justify-between  items-center">
        <div className="logo ">arsh</div>
        <div className="links flex gap-5">
          {[
            "services ",
            " our work ",
            " About us ",
            " Insights ",
            " contact ",
          ].map((elem, i) => {
            return (
              <a
                key={i}
                className={`text-md capitalize font-light ${
                  i === 4 && "ml-20"
                }`}
              >
                {elem}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NavBar;
