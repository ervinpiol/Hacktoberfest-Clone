import React from "react";
import Hero from "../common/Hero/Hero";
import Lore from "../components/About/Lore";
import CodeContributors from "../components/About/CodeContributors";
import Council from "../components/About/Council";
import AboutSvg from "../components/About/AboutSvg";

const About = () => {
  return (
    <div>
      <Hero title="about" gradient="light-purple-bg" svg={<AboutSvg />} />
      <Lore />
      <CodeContributors />
      <Council />
    </div>
  );
};

export default About;
