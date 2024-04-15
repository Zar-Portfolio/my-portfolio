import React from "react";
import { TypeAnimation } from "react-type-animation";
import { WORKS } from "../assets/menu-icon";

const Works = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <TypeAnimation
              sequence={["Works."]}
              speed={0.5}
              className="dark:text-white/80 "
            />
          </h1>
          <div className="border-2 w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={WORKS} className="w-16" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
