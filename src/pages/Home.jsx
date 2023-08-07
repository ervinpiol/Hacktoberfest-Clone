import React from "react";
import Hero from "../components/Home/Hero";
import ItsClose from "../components/Home/ItsClose";
import SlidingText from "../components/Home/SlidingText";
import TextSection from "../components/Home/TextSection";
import Prepare from "../components/Home/Prepare";
import Heart from "../components/Home/Heart";
import Support from "../components/Home/Support";
import Supporters from "../layout/Supporters";

const Home = () => {
  return (
    <div>
      <Hero />
      <ItsClose />
      <SlidingText />
      <TextSection />
      <Prepare />
      <Heart />
      <Support />
    </div>
  );
};

export default Home;
