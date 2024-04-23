import React from "react";
import { CAKE, EMAIL, LOCATION, PHONE } from "../../assets/icons";
import { FaMobileScreenButton } from "react-icons/fa6";

const BasicDetails = () => {
  return (
    <div className="flex flex-col mt-4 bg-gray-50/20 p-4 rounded-md gap-2">
      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={PHONE} alt="" className="w-[32px] h-[32px]" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Mobile
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-light tracking-tight dark:text-white/80">
            +63 916 636 1646
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={EMAIL} alt="" className="w-[30px] h-[30px]" />
        </div>

        <div>
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Email
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-light tracking-tight dark:text-white/80">
            zardron.pesquera1993@gmail.com
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={LOCATION} alt="" className="w-[30px] h-[30px]" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Location
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-light tracking-tight dark:text-white/80">
            Lapu-Lapu City, Cebu
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-bpb-2">
        <div className="flex md:hidden lg:block items-center justify-center bg-white/70 rounded-md shadow-md p-1">
          <img src={CAKE} alt="" className="w-[30px] h-[30px]" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase text-white font-medium">
            Birthday
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-light tracking-tight dark:text-white/80">
            June 18, 1993
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
