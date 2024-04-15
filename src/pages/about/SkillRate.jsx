import React from "react";
import { APPDEV, BACKEND, FRONTEND, UXDESIGNER } from "../../assets/icons";
import ProgressLine from "../ProgressLine";

const SkillRate = () => {
  return (
    <div className="mt-6 flex flex-col bg-gray-50/30 rounded-md">
      <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
        <img src={FRONTEND} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <p className="font-semibold">Frontend Development</p>
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
          <p className="font-semibold">UX Designer</p>
          <ProgressLine
            visualParts={[
              {
                percentage: "70%",
                color: "#2563eb",
              },
            ]}
          />
        </div>
      </div>

      <div className="flex px-2 py-1 gap-2 border-b border-b-gray-50/40">
        <img src={BACKEND} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <p className="font-semibold">Backend Development</p>
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

      <div className="flex px-2 py-1 gap-2">
        <img src={APPDEV} alt="" className="w-14" />
        <div className="flex w-full flex-col justify-center pr-2">
          <p className="font-semibold">App Development</p>
          <ProgressLine
            visualParts={[
              {
                percentage: "65%",
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
