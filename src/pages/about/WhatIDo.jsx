import React from "react";
import { APPDEV, BACKEND, FRONTEND, UXDESIGNER } from "../../assets/icons";

const WhatIDo = () => {
  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold mb-2 text-white">What I Do!</h1>

      <div className="w-full flex flex-col lg:flex-row gap-4">
        <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
          <div className="w-[20%]">
            <img src={FRONTEND} alt="" className="w-[500px] " />
          </div>
          <div className="flex w-[80%] flex-col justify-center gap-1 text-white/80">
            <p className="font-semibold text-base xl:text-lg">
              Frontend Development
            </p>
            <p className="text-sm md:text-xs xl:text-base font-light">
              Creating the layout, designs and functionality of websites that
              users interact with directly.
            </p>
          </div>
        </div>

        <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
          <div className="w-[20%]">
            <img src={BACKEND} alt="" className="w-[500px]" />
          </div>
          <div className="flex w-[80%] flex-col justify-center gap-1 text-white/80">
            <p className="font-semibold text-base xl:text-lg">
              Backend Development
            </p>
            <p className="text-sm md:text-xs xl:text-base font-light">
              Focus on the server-side logic and database management of web
              applications.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-4 mt-4">
        <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
          <div className="w-[20%]">
            <img src={UXDESIGNER} alt="" className="w-[500px]" />
          </div>
          <div className="flex w-[80%] flex-col justify-center gap-1 text-white/80">
            <p className="font-semibold text-base xl:text-lg ">UX Design</p>
            <p className="text-sm md:text-xs xl:text-base font-light">
              Creating meaningful and enjoyable experience for users interacting
              with digital products or services.
            </p>
          </div>
        </div>

        <div className="flex flex-1 gap-2 bg-gray-50/30 p-4 rounded-md h-full">
          <div className="w-[20%]">
            <img src={APPDEV} alt="" className="w-[500px]" />
          </div>
          <div className="flex w-[80%] flex-col justify-center gap-1 text-white/80">
            <p className="font-semibold text-base xl:text-lg">
              App Development
            </p>
            <p className="text-sm md:text-xs xl:text-base font-light">
              I design, build, and deploy software app for various platforms
              such as mobile, desktops, or web browsers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
