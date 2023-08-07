import React from "react";
import Repeater from "../assets/common/repeater.svg";

const Separator = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Repeater})` }}
      className="h-6 w-full mb-16"
    />
  );
};

export default Separator;
