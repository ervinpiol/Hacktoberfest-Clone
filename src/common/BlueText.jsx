import React from "react";

const BlueText = ({ children, noArrow }) => {
  return (
    <span className={`blue-text`}>
      {children}
      {noArrow ? "" : <span className="arrow" />}
    </span>
  );
};

export default BlueText;
