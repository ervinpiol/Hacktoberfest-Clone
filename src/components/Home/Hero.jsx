import React from "react";

import HeroSVG from "../../assets/common/hero_svg_text.svg";
import Cover from "../../assets/common/cover.svg";
import Logo from "../../assets/common/Logo.svg";

import DigitalOceanLogo from "../../assets/Presented/digitalocean-logo.svg";
import AppwriteLogo from "../../assets/Presented/appwrite-logo.svg";
import DockerLogo from "../../assets/Presented/docker-logo.svg";

const Hero = () => {
  return (
    <div className="bg purple-bg w-full lg:px-16 relative min-h-[632px] mt-6 -mb-6 flex px-6">
      <div className="w-full xl:w-[1312px] h-full mx-auto flex justify-center items-center flex-col py-6 lg:py-20">
        <>
          <div className="relative filter-shadow">
            <img
              src={Logo}
              alt="Logo"
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-28"
            />
            <img src={Cover} alt="Cover" className="mx-auto" />
          </div>
          <img src={HeroSVG} alt="HeroSVG" className="pt-6 filter-shadow" />
        </>
        <div className="flex pt-16 items-center md:items-end gap-6 flex-col md:flex-row">
          <p className="text-sm font-medium opacity-75">PRESENTED BY</p>
          <div className="flex gap-5 flex-col sm:flex-row items-center filter-shadow sm:items-end">
            <img src={DigitalOceanLogo} alt="" className="w-40" />
            <img src={AppwriteLogo} alt="" className="w-32" />
            <img src={DockerLogo} alt="" className="w-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
