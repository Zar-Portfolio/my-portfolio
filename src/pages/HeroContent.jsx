import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import IMAGE from "../assets/mainIconsdark.svg";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="relative h-screen text-white flex items-center justify-center z-20">
      <motion.div
        initial="hidden"
        animate="visible"
        className="h-screen flex flex-row items-center justify-center px-10 lg:px-20 w-full"
      >
        <div className="h-full w-full flex flex-col gap-6 2xl:gap-3 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[14px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[5px] w-6 h-6 2xl:h-8 2xl:w-8" />
            <h1 className="Welcome-text text-[14px] 2xl:text-[20px]">
              Full Stack Developer
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(2)}
            className="flex flex-col gap-6 mt-6 text-4xl 2xl:text-6xl font-bold text-white lg:max-w-[400px] 2xl:max-w-[550px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience.
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(2.2)}
            className="text-left lg:text-justify text-base 2xl:text-lg text-gray-400 my-3 2xl:my-5 max-w-[350px] 2xl:max-w-[500px]"
          >
            I&apos;m a Full Stack Developer with experience in Website, Mobile
            and Software development.
            <p className="mt-4">Check out my projects and skills.</p>
          </motion.div>

          <motion.div variants={slideInFromLeft(2.2)} className="relative mt-2">
            <Link
              to="/dashboard"
              className=" button-primary py-4 px-10 px-6text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              Explore Now
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(2.4)}
          className="hidden w-full h-full lg:flex justify-end items-center mt-10"
        >
          <img
            src={IMAGE}
            alt=""
            className=" lg:w-[350px] lg:h-[350px] 2xl:w-[650px] 2xl:h-[650px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
