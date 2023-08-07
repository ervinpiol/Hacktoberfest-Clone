import React from "react";
import "./sideNumberStyle.css";

const SideNumbers = ({ i, isYellow }) => {
  return (
    <>
      <p
        className={`heads top-head ${
          isYellow ? "text-Yellow" : i === 0 ? "text-Blue" : "text-Violet"
        }`}
      ></p>
      <p
        className={`heads bottom-head ${
          isYellow ? "text-Green" : i === 0 ? "text-Violet" : "text-Blue"
        }`}
      ></p>
      <p
        className={`heads left-head ${
          isYellow ? "text-Yellow" : i === 0 ? "text-Blue" : "text-Violet"
        }`}
      ></p>
      <p
        className={`heads right-head ${
          isYellow ? "text-Yellow" : i === 0 ? "text-Blue" : "text-Violet"
        }`}
      ></p>
    </>
  );
};

export default SideNumbers;
