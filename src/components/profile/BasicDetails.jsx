import React from "react";
import { CAKE, EMAIL, LOCATION, PHONE } from "../../assets/icons";

const BasicDetails = () => {
  return (
    <div className="flex flex-col mt-4 bg-gray-50/20 p-4 rounded-md gap-2">
      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="w-[20%]  h-12 flex items-center justify-center bg-white/70 rounded-md shadow-md">
          <img src={PHONE} alt="" className="w-12" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase dark:text-white/80">
            Mobile
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-medium tracking-tight dark:text-white/80">
            +63 916 636 1646
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="w-[20%] h-12 flex items-center justify-center bg-white/70 rounded-md shadow-md">
          <img src={EMAIL} alt="" className="w-8" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs  tracking-tight uppercase dark:text-white/80">
            Email
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm  font-medium tracking-tight dark:text-white/80">
            zardron.pesquera1993@gmail.com
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-b border-b-gray-50/30 pb-2">
        <div className="w-[20%] h-12 flex items-center justify-center bg-white/70 rounded-md shadow-md">
          <img src={LOCATION} alt="" className="w-10" />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase dark:text-white/80">
            Location
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-medium tracking-tight dark:text-white/80">
            Lapu-Lapu City, Cebu
          </p>
        </div>
      </div>

      <div className="w-full flex items-center gap-2 border-bpb-2">
        <div className="w-[20%] h-12 flex items-center justify-center bg-white/70 rounded-md shadow-md">
          <img src={CAKE} alt="" className="w-8 " />
        </div>

        <div className="w-[80%]">
          <p className="text-xs tracking-tight uppercase dark:text-white/80">
            Birthday
          </p>
          <p className="text-[11px] sm:text-base md:text-[12px] xl:text-sm font-medium tracking-tight dark:text-white/80">
            June 18, 1993
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
