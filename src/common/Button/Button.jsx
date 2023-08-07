import React from "react";
import "./buttonStyles.css";

const Button = ({ children, isDark, isPink, toggleProjects }) => {
  return (
    <div
      className={`${isDark ? "db-parent" : isPink ? "pb-parent" : "gb-parent"}`}
    >
      <button
        className={`text-start font-medium button-style ${
          isDark
            ? "dark-button"
            : isPink
            ? "pink_button"
            : "mt-12 gradient-button hover:rotate-2"
        } `}
        onClick={toggleProjects}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
