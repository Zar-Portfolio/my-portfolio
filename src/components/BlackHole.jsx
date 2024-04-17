import React from "react";
import VIDEO from "../assets/blackhole.webm";

const BlackHole = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 -top-[49%] absolute z-[1] h-full w-full object-cover"
    >
      <source src={VIDEO} type="video/webm" />
    </video>
  );
};

export default BlackHole;
