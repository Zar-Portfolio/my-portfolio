import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

import { RESUME } from "../../assets/menu-icon";
import Education from "./Education";
import Experience from "./Experience";
import GetScreenSize from "../../components/GetScreenSize";
import ScrollToContent from "../../components/ScrollToContent";

const index = ({ scrollNow, setScrollNow }) => {
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
      <div className="flex justify-between gap-5">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">
            <TypeAnimation
              sequence={["Resume.", 1000]}
              speed={20}
              className="dark:text-white/80 "
            />
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
