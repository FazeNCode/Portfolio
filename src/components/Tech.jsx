import React from "react";
import { Linuxs, Htmls, Csss, Reacts } from "./canvas";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <>
      <div>
        <h2 className="font-bold font-mono text-5xl">Technologies</h2>
      </div>

   
        <div className="flex flex-1 mx-[200px] items-center bg-red-300 ">
          <Linuxs />

          <Htmls />

          <Csss />
          <Reacts />
        </div>
     
    </>
  );
};

export default SectionWrapper (Tech, "techn");
