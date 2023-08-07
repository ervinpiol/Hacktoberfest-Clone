import React from "react";
import Hero from "../common/Hero/Hero";
import Values from "../components/Participation/Values";
import Contributors from "../components/Participation/Contributors";
import Resources from "../components/Participation/Resources";
import PullOrMerge from "../components/Participation/PullOrMerge";
import Spam from "../components/Participation/Spam";
import Maintainers from "../components/Participation/Maintainers";
import Faqs from "../components/Participation/Faqs";
import ParticipationSvg from "../components/Participation/ParticipationSvg";

const Participation = () => {
  return (
    <div>
      <Hero
        title="Participation"
        gradient="light-blue-bg"
        svg={<ParticipationSvg />}
      />
      <Values />
      <Contributors />
      <Resources />
      <PullOrMerge />
      <Spam />
      <Maintainers />
      <Faqs />
    </div>
  );
};

export default Participation;
