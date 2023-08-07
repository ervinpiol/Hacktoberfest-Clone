import React from "react";

const PlusButton = ({ selectedItem, index, isAbsolute }) => {
  return (
    <button
      className={` w-12 lg:relative ${
        selectedItem === index
          ? "before:content-['[-]'] minus-button"
          : "before:content-['[+]'] plus-button"
      } ${isAbsolute ? "absolute left-0 top-0" : "relative"}`}
    ></button>
  );
};

const EmptyButton = () => {
  return <button className="text-shadow flex-[0_0_48px] w-12">[ ]</button>;
};

export { EmptyButton, PlusButton };
