"use client";
import Eyes from "@/Components/Eyes";
import Landing from "@/Components/Landing";
import Marquee from "@/Components/Marquee";
import NavBar from "@/Components/NavBar";
import React from "react";
import { createContext } from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-screen text-white bg-zinc-950">
        <NavBar />
        <Landing />
        <Marquee />
        <Eyes />
      </div>
    </>
  );
};

export default page;
