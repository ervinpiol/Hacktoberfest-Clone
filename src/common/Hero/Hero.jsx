import React from "react";
import "./gradientStyle.css";

const Hero = ({ title, gradient, svg }) => {
  return (
    <div
      className={`bg w-full relative min-h-[456px] mt-0 mb-32 px-6 sm:px-16 xl:px-0 flex ${gradient}`}
    >
      <div className="mx-auto flex justify-start items-end max-w-[1312px] w-full relative">
        <h1 className="text-shadow h1-styles uppercase break-words w-full">
          {title}
        </h1>
        {svg}
      </div>
    </div>
  );
};

export default Hero;
