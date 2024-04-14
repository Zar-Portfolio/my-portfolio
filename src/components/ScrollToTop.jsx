import { useEffect, useState } from "react";
import { PiArrowFatLinesUpLight } from "react-icons/pi";
import GetScreenSize from "./GetScreenSize";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);
  const screenSize = GetScreenSize();

  useEffect(() => {
    window.addEventListener("scroll", isScroll);
    return () => {
      window.removeEventListener("scroll", isScroll);
    };
  });

  const isScroll = () => {
    const top = window.scrollY;

    top >= 100 ? setShow(true) : setShow(false);
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`animate__animated ${
          show ? "animate__backInDown" : "animate__backOutDown "
        } group fixed ${
          screenSize.width <= 600
            ? "bottom-[5.4rem] right-2"
            : "bottom-4 right-4"
        }  cursor-pointer  p-2 rounded-lg bg-white border-2 border-black/30 dark:border-[#0076ff] dark:bg-black dark:border-primary dark:border-2 z-50 hover:bg-dark group`}
        onClick={scrollToTop}
      >
        <PiArrowFatLinesUpLight
          className=" text-dark dark:text-white animate-bounce group-hover:animate-none"
          size={20}
        />
      </div>
    </>
  );
};

export default ScrollToTop;
