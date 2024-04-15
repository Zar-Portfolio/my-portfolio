import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Button from "./components/Button";
import ParticlesComponent from "./components/particles.jsx";
import { DARK, LIGHT } from "./assets/icons";
import "animate.css";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition.jsx";
import LOGO from "../src/assets/logo2.png";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Starfield from "react-starfield";
import EARTH from "./assets/earth.png";

const App = () => {
  // Darkmode Config
  const [darkMode, setDarkMode] = useState("light");
  const element = document.documentElement;

  switch (darkMode) {
    case "dark":
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      break;

    case "light":
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      break;

    default:
      element.classList.add("light");
      break;
  }

  return (
    <div className="relative h-screen">
      <AnimatePresence mode="wait">
        <Transition />

        <Starfield
          starCount={2000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        <div
          // className={` relative${
          //   darkMode === "light" ? "bg-gradient-light" : "bg-gradient-dark"
          // } w-full px-10 lg:px-20 z-10 2xl:px-40`}
          className="relativew-full px-10 lg:px-20 z-10 2xl:px-40`"
        >
          <div className="flex items-center justify-center pt-10">
            <div className="flex flex-row items-center gap-2">
              <img src={LOGO} alt="" className="w-16 lg:w-24 z-30" />
              <div>
                <p
                  className="relative name-logo z-30 uppercase text-xl lg:text-4xl font-bold 
                  bg-gradient-to-r from-purple-600 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
                >
                  Zardron Pesquera
                </p>
                <p
                  className="text-[10px] lg:text-sm font-bold tracking-[.34em] pb-1 lg:p-0 lg:tracking-[.59em] uppercase bg-gradient-to-r from-purple-600 via-[#33bfdf] to-blue-500 
                  text-transparent bg-clip-text animate-gradient [text-shadow:_2px_3px_0_rgb(0_0_0_/20%)]"
                >
                  I turn coffee into code.
                </p>
              </div>
            </div>
            {/* <Button
              color={`bg-white hover:scale-110 z-30 ${
                darkMode === "light" ? " border-black" : "border-[#ff9901] "
              }`}
              type="button"
              disabled={false}
              clickHandler={
                darkMode === "light"
                  ? () => setDarkMode("dark")
                  : () => setDarkMode("light")
              }
              icon={
                <img
                  src={darkMode === "light" ? DARK : LIGHT}
                  alt="darkMode"
                  className="w-6 lg:w-8 rounded-md"
                />
              }
              name=""
            /> */}
          </div>

          <Dashboard darkMode={darkMode} />
          {/* 
          <ParticlesComponent
            id="particles"
            darkMode={darkMode === "light" ? "light" : "dark"}
          /> */}

          <ScrollToTop />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default App;
