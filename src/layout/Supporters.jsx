import React from "react";
import Separator from "../common/Separator";
import DigitalOceanLogo from "../assets/Presented/digitalocean-logo.svg";
import AppwriteLogo from "../assets/Presented/appwrite-logo.svg";
import DockerLogo from "../assets/Presented/docker-logo.svg";

import NovuLogo from "../assets/Presented/novu-logo.svg";
import RapidapiLogo from "../assets/Presented/rapidapi-logo.svg";
import DevtronLogo from "../assets/Presented/devtron-logo.svg";

const Supporters = () => {
  return (
    <div className="bg blue-bg w-full px-6 lg:px-16 relative min-h-[540px] mt-[200px] -mb-6 flex">
      <div className="w-full xl:w-[1312px] mx-auto">
        <Separator />
        <div className="px-16">
          <div className="flex pt-14 items-center gap-8 flex-col">
            <p className="text-sm font-medium opacity-75">PRESENTED BY</p>
            <div className="flex gap-10 filter-shadow items-center flex-wrap justify-center">
              <img src={DigitalOceanLogo} alt="" className="w-[280px]" />
              <img src={AppwriteLogo} alt="" className="w-56" />
              <img src={DockerLogo} alt="" className="w-[196px]" />
            </div>
          </div>
          <div className="flex pt-14 items-center gap-8 flex-col">
            <p className="text-sm font-medium opacity-75">SUPPORTED BY</p>
            <div className="flex gap-10 flex-wrap filter-shadow justify-center">
              <img src={NovuLogo} alt="" className="w-40" />
              <img src={RapidapiLogo} alt="" className="w-40" />
              <img src={DevtronLogo} alt="" className="w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supporters;
