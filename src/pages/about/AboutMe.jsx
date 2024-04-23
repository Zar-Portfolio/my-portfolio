import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const AboutMe = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);
  return (
    <>
      {show ? (
        <TypeAnimation
          sequence={[
            "Hello I'm a Full Stack Developer.",
            1000,
            "I can do Frontend Development.",
            1000,
            "I can do Backend Development.",
            1000,
            "I can do UX Design.",
            1000,
            "I can do App Development.",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-sm md:text-xl xl:text-2xl transition-all ease-linear duration-300 text-white/80"
        />
      ) : (
        <div className="py-4"></div>
      )}

      <div className="mt-4">
        <p className="text-justify text-xs xl:text-base text-white/80 font-light">
          I'm a Bachelor of Science in Information Technology Graduate at
          University of Cebu Lapu-Lapu and Mandaue (UCLM).
        </p>

        <p className="text-justify text-xs xl:text-base mt-3 text-white/80 font-light">
          A very ambitious developer. I love to code because if I can think it,
          I can make it a reality.
        </p>

        <p className="text-justify text-xs xl:text-base mt-3 text-white/80 font-light">
          Also a competitive coder with an amazing ability to develop websites
          that are both functional and aesthetically pleasing. I have a strong
          understanding of web standards and best practices, and I am passionate
          about creating websites that users will find easy to use and visually
          appealing.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
