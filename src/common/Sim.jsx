import React from "react";

const Sim = ({ isAbout, target }) => {
  return (
    <div className="flex flex-col gap-3 mt-16">
      {isAbout && <h4 className="text-shadow h4-styles">NEW FOR 2022</h4>}
      <a
        href={`#${target}`}
        className="flex items-center gap-3 cursor-pointer sim-parent group"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H22C22.8284 0.5 23.5 1.17157 23.5 2V22C23.5 22.8284 22.8284 23.5 22 23.5H8.82843C8.4306 23.5 8.04907 23.342 7.76777 23.0607L0.939339 16.2322C0.658035 15.9509 0.5 15.5694 0.5 15.1716V2Z"
            stroke="#e5e1e6"
          ></path>
        </svg>
        <span className="sim"></span>
      </a>
    </div>
  );
};

export default Sim;
