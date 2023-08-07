import React from "react";
import { Link } from "react-router-dom";

import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import Button from "../../common/Button/Button";
import SideNumbers from "../../common/SideNumbers/SideNumbers";

const Prepare = () => {
  const items = [
    {
      h3Text: "PREPTEMBER",
      pText:
        "NOW IS THE PERFECT TIME TO PREPARE FOR HACKTOBERFEST. GET A JUMP START BY FINDING PROJECTS TO CONTRIBUTE TO, ADDING THE ‘HACKTOBERFEST’ TAG TO YOUR PROJECTS, OR FAMILIARIZING YOURSELF WITH GIT.",
      button1: "GET THE EVENT KIT",
      link: "/events/#organizers",
      button2: "HOW TO PARTICIPATE",
    },
    {
      h3Text: "NEW FOR 2022",
      pText:
        "HACKTOBERFEST ISN’T ALL ABOUT CODE. ANYONE WHO WRITES, DESIGNS, TESTS, MENTORS, OR ORGANIZES OFFERS MUCH NEEDED SUPPORT FOR OPEN-SOURCE PROJECTS ALL OVER THE WORLD.",
      button1: "LEARN ABOUT NON-CODE CONTRIBUTIONS",
      link: "/about/#low-or-non-code",
    },
  ];

  return (
    <div id="prepare">
      <div className="w-full xl:w-[1312px] mx-auto mt-32 text-shadow px-6 sm:px-16 xl:px-0">
        <LineSeparator />
        <Sim target="prepare" />
        <h2 className="text-shadow h2-styles">PREPARE TO HACK</h2>
        <h5 className="mt-6 text-xl">
          HACKTOBERFEST IS FOR EVERYONE. WHETHER IT’S YOUR FIRST TIME—OR YOUR
          NINTH—IT’S ALMOST TIME TO HACK OUT FOUR PRISTINE PULL/MERGE REQUESTS
          AND COMPLETE YOUR MISSION FOR OPEN SOURCE. JOIN OTHER MEMBERS OF THE
          OPEN-SOURCE COMMUNITY ON THE HACKTOBERFEST DISCORD.
        </h5>
        <Button>JOIN THE HACKTOBERFEST DISCORD</Button>
        <div className="text-shadow-none flex mt-16 gap-8 relative flex-col lg:flex-row">
          {items.map((item, i) => (
            <div
              key={i}
              className={`sparkle w-full lg:w-1/2 text-Black ${
                i === 0 ? "blue-container-styles" : "violet-container-styles"
              }`}
            >
              <SideNumbers i={i} />
              <h3 className="h3-styles">{item.h3Text}</h3>
              <p className="mt-6 font-medium">{item.pText}</p>
              <div className="flex text-white mt-10 gap-4 flex-col md:flex-row">
                <Link to={item.link} className="dark-b">
                  <Button isDark>{item.button1}</Button>
                </Link>
                {item.button2 && (
                  <Link className="dark-b" to="/participation">
                    <Button isDark>{item.button2}</Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prepare;
