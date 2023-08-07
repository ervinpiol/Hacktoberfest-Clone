import React from "react";
import Supporters from "./Supporters";
import Cover from "../assets/common/cover.svg";
import Logo from "../assets/common/Logo.svg";

const Footer = () => {
  return (
    <div>
      <Supporters />
      <div className="w-full xl:w-[1312px] flex gap-28 md:gap-8 mx-auto pb-16 xl:pb-[120px] mt-40 lg:mt-16 flex-col md:flex-row px-6 sm:px-16 xl:px-0">
        <div className="w-full xl:w-1/4 flex flex-col items-start gap-6 order-last md:order-none">
          <div className="relative filter-shadow">
            <img src={Cover} alt="" className="w-20" />
            <img
              src={Logo}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10"
            />
          </div>
          <p className="text-sm opacity-75 text-shadow">
            © 2022 DIGITALOCEAN, LLC. <br /> ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="w-full xl:w-1/4">
          <h4 className="text-2xl text-shadow">SHARE</h4>
          <ul className="flex flex-col gap-4 pt-6 opacity-75">
            <li className="border-b">TWITER</li>
            <li className="border-b">FACEBOOK</li>
            <li className="border-b">LINKEDIN</li>
            <li className="border-b">HACKER NEWS</li>
            <li className="border-b">REDDIT</li>
          </ul>
        </div>
        <div className="w-full xl:w-1/4">
          <h4 className="text-2xl text-shadow">FOLLOW</h4>
          <ul className="flex flex-col gap-4 pt-6 opacity-75">
            <li className="border-b">DISCORD</li>
            <li className="border-b">TWITTER</li>
            <li className="border-b">REDDIT</li>
          </ul>
        </div>
        <div className="w-full xl:w-1/4">
          <h4 className="text-2xl text-shadow">LEGAL</h4>
          <ul className="flex flex-col gap-4 pt-6 opacity-75">
            <li className="border-b">TERMS</li>
            <li className="border-b">PRIVACY</li>
            <li className="border-b">BRAND GUIDELINES</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
