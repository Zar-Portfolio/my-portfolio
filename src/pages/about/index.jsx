import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ABOUT } from "../../assets/menu-icon";
import GetScreenSize from "../../components/GetScreenSize";
import ScrollToContent from "../../components/ScrollToContent.js";
import AboutMe from "./AboutMe.jsx";
import WhatIDo from "./WhatIDo.jsx";
import SkillRate from "./SkillRate.jsx";

const index = ({ scrollNow, setScrollNow }) => {
  console.log(scrollNow);
  const screenSize = GetScreenSize();

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  });

  const isScroll = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 150 ? "" : setScrollNow(false);
  };
  screenSize.width >= 600 ? "" : scrollNow ? ScrollToContent() : "";

  return (
    <div className="p-6">
      <div className="flex items-center justify-between gap-5">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight">
            <TypeAnimation
              sequence={["About."]}
              speed={0.5}
              className="text-white"
            />
          </h1>
          <div className="border-2 w-32 sm:w-64 border-[#1e5799] shadow-md rounded-lg mt-3"></div>
        </div>

        <div>
          <img src={ABOUT} className="w-20" alt="" />
        </div>
      </div>

      <div className="animate__animated animate__fadeInUp mt-2">
        <AboutMe />
        <WhatIDo />
        <SkillRate />
      </div>
    </div>
  );
};

export default index;
