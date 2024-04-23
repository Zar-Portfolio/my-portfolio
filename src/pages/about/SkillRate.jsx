import React from "react";
import { APPDEV, BACKEND, FRONTEND, UXDESIGNER } from "../../assets/icons";
import ProgressLine from "../ProgressLine";

const SkillRate = () => {
  return (
    <div className="mt-6 flex flex-col bg-gray-50/30 rounded-md">
      <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
        <img src={FRONTEND} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <div className="flex items-center justify-between">
            <p className="text-base xl:text-lg text-white/80 mb-1">
              Frontend Development
            </p>
            <p className="text-sm xl:text-base text-white/80 mb-1 font-light">
              85%
            </p>
          </div>
          <ProgressLine
            visualParts={[
              {
                percentage: "85%",
                color: "#2563eb",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
        <img src={BACKEND} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <div className="flex items-center justify-between">
            <p className="text-base xl:text-lg text-white/80 mb-1">
              Backend Development
            </p>
            <p className="text-sm xl:text-base text-white/80 mb-1 font-light">
              85%
            </p>
          </div>
          <ProgressLine
            visualParts={[
              {
                percentage: "85%",
                color: "#2563eb",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
        <img src={UXDESIGNER} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <div className="flex items-center justify-between">
            <p className="text-base xl:text-lg text-white/80 mb-1">
              UX Designer
            </p>
            <p className="text-sm xl:text-base text-white/80 mb-1 font-light">
              75%
            </p>
          </div>
          <ProgressLine
            visualParts={[
              {
                percentage: "75%",
                color: "#2563eb",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex px-2 py-1 gap-2">
        <img src={APPDEV} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <div className="flex items-center justify-between">
            <p className="text-base xl:text-lg text-white/80 mb-1">
              App Development
            </p>
            <p className="text-sm xl:text-base text-white/80 mb-1 font-light">
              75%
            </p>
          </div>
          <ProgressLine
            visualParts={[
              {
                percentage: "75%",
                color: "#2563eb",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillRate;
