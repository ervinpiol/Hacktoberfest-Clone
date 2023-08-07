import React from "react";
import Hero from "../common/Hero/Hero";
import Projects from "../components/Donate/Projects";
import DonateSvg from "../components/Donate/DonateSvg";

const Donate = () => {
  return (
    <div>
      <Hero title="donate" gradient="green-bg" svg={<DonateSvg />} />
      <Projects />
    </div>
  );
};

export default Donate;
