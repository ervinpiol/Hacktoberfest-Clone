import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Participation from "../pages/Participation";
import Events from "../pages/Events";
import Donate from "../pages/Donate";
import About from "../pages/About";

const AnimatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participation" element={<Participation />} />
      <Route path="/events" element={<Events />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AnimatedRoutes;
