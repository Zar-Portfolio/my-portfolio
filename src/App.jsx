import "animate.css";
import Transition from "./components/Transition.jsx";
import StarsCanvas from "./components/StarBackground.jsx";
import Home from "./pages/index.jsx";
import Dashboard from "./pages/dashboard/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="h-full w-full bg-[#030014]">
      <StarsCanvas />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
