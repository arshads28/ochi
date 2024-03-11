"use client";
import Eyes from "@/Components/Eyes";
import Featured from "@/Components/Featured";
import Landing from "@/Components/Landing";
import Marquee from "@/Components/Marquee";
import NavBar from "@/Components/NavBar";
import React from "react";
import { createContext } from "react";
import LocomotiveScroll from "locomotive-scroll";
import About from "@/Components/About";

const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-[100%] h-full text-white bg-zinc-950 overflow-clip">
        <NavBar />
        <Landing />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
      </div>
    </>
  );
};

export default page;
