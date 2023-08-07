import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../layout/Header";
import AnimatedRoutes from "../layout/AnimatedRoutes";
import Footer from "../layout/Footer";
import Navigation from "../components/Navigation/Navigation";
import { navItems } from "../components/Navigation/navItems";

const Hacktoberfest = () => {
  const location = useLocation();

  const navLocations = ["/participation", "/events", "/about"];

  return (
    <div>
      {navLocations.includes(location.pathname) && (
        <Navigation navigations={navItems[location.pathname]} />
      )}
      <Header />
      <AnimatedRoutes />
      <Footer />
    </div>
  );
};

export default Hacktoberfest;
