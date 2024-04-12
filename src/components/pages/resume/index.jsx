import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { RESUME } from "../../../assets/menu-icon";
import Education from "./Education";
import Experience from "./Experience";

const index = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <TypeAnimation sequence={["Resume.", 1000]} speed={20} />
          </h1>
          <div className="border-2 w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={RESUME} className="w-16" alt="" />
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp">
        <Education />

        <Experience />
      </div>
    </div>
  );
};

export default index;
