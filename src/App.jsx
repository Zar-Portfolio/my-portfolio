import { useState } from "react";
import Button from "./components/Button";
import ParticlesComponent from "./components/particles.jsx";
import { DARK, LIGHT } from "./assets/icons";
import "animate.css";
import { AnimatePresence } from "framer-motion";
import Transition from "./components/Transition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Starfield from "react-starfield";
import EARTH from "./assets/earth.png";
import StarsCanvas from "./components/StarBackground.jsx";
import BlackHole from "./components/BlackHole.jsx";
import Dashboard from "./pages/dashboard/index.jsx";

const App = () => {
  return (
    <div className="h-full w-full bg-[#030014]">
      <StarsCanvas />
      <Transition />
      <Dashboard />
    </div>
  );
};

export default App;
