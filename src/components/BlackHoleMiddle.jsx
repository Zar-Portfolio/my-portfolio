import React from "react";
import VIDEO from "../assets/blackholemid.webm";

const BlackHoleMiddle = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="hidden lg:block top-0 absolute z-[1] h-full w-full object-cover"
    >
      <source src={VIDEO} type="video/webm" />
    </video>
  );
};

export default BlackHoleMiddle;
