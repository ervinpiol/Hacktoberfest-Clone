import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Logo from "../assets/common/Logo.svg";
import Cover from "../assets/common/cover.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const links = ["PARTICIPATION", "EVENTS", "DONATE", "ABOUT"];

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <div>
      <div
        className={`w-full xl:w-[1312px] flex justify-between items-center mx-auto mt-10 top-number relative ${
          openMenu ? "px-6" : "px-6 sm:px-16 xl:px-0"
        }`}
      >
        <div className="flex items-center gap-5 z-[100]">
          <Link to="/" className="relative">
            <img src={Cover} alt="" className="w-12" />
            <img
              src={Logo}
              alt=""
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-7 filter-shadow"
            />
          </Link>
          <p className="opacity-75">HACKTOBERFEST</p>
        </div>
        <ul
          className={`lg:gap-6 z-50 gap-10 lg:flex ${
            openMenu
              ? "absolute h-screen bg-DarkViolet text-Blue w-full left-0 -top-10 pt-40 px-6 flex-col flex"
              : "hidden"
          }`}
        >
          {links.map((link, i) => (
            <li
              key={i}
              className={`pb-1 ${
                i !== links.length - 1 &&
                "shadow-[0_1px_0_rgba(229,225,230,0.25)] lg:shadow-none"
              }`}
            >
              <NavLink className="opacity-75" to={`/${link.toLowerCase()}`}>
                {link}
              </NavLink>
            </li>
          ))}
          <li className="opacity-75">
            <a href="#">DISCORD</a>
          </li>
        </ul>
        <button
          className="opacity-75 z-[100] block lg:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "CLOSE" : "MENU"}
        </button>
      </div>
      {openMenu && (
        <h6 className="absolute z-[100] bottom-0 px-8 py-10 text-sm text-shadow">
          © 2022 DigitalOcean, LLC. All Rights Reserved.
        </h6>
      )}
    </div>
  );
};

export default Header;
