import React from "react";
import LOGO from "../assets/logo2.png";
import HeroContent from "./HeroContent";
import BlackHoleMiddle from "../components/BlackHoleMiddle";
import Transition from "../components/Transition";

const index = () => {
  return (
    <>
      <Transition />
      <div className="relative overflow-hidden">
        <div className="absolute top-20 right-0 left-0 mx-auto lg:right-auto lg:left-auto">
          <div className="flex flex-col justify-center lg:flex-row items-center gap-2 px-10 lg:px-20">
            <img src={LOGO} alt="" className="w-16 lg:w-24 z-30" />
            <div>
              <p
                className="relative name-logo z-10 uppercase text-2xl lg:text-4xl font-bold 
                  bg-gradient-to-r from-purple-500 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
              >
                Zardron Pesquera
              </p>
              <p className="relative z-10 text-[12px] lg:text-sm font-bold tracking-[.34em] pb-1 lg:p-0 lg:tracking-[.59em] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
                I turn coffee into code.
              </p>
            </div>
          </div>
        </div>
        <BlackHoleMiddle />
        <HeroContent />
      </div>
    </>
  );
};

export default index;
