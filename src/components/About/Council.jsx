import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import { councils } from "./councilData";
import { PlusButton } from "../../common/ShowButton";
import BlueText from "../../common/BlueText";
import { show } from "../../common/anim";

const Council = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="council">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim isAbout target="council" />
        <h2 className="h2-styles">ADVISORY COUNCIL</h2>
        <p className="mt-10">
          EACH YEAR, WE BRING TOGETHER A TALENTED GROUP OF OPEN-SOURCE SUPERFANS
          WHO HELP ENSURE THAT HACKTOBERFEST IS ACCESSIBLE, INCLUSIVE, AND
          ENRICHING FOR BOTH CONTRIBUTORS AND MAINTAINERS.
        </p>
        <div className="flex flex-col gap-6 mt-10">
          {councils.map((council, index) => (
            <div
              key={index}
              className="council-bg group hover:shadow-[0px_0px_12px_rgb(124,_127,_255)] cursor-pointer div_parent"
              onClick={() =>
                setSelectedItem(selectedItem === index ? null : index)
              }
            >
              <div className="flex items-center pl-3">
                <PlusButton selectedItem={selectedItem} index={index} />
                <img
                  src={council.image}
                  alt={council.name}
                  className={`object-cover w-32 h-32 rounded-3xl group-hover:rotate-0 group-hover:-translate-y-2.5 transition-all duration-300 ease-in-out group-hover:hue-rotate-[140deg] group-hover:contrast-[150%] ${
                    index % 2 === 1 ? "rotate-6" : "-rotate-6"
                  }`}
                />
                <h3 className="h3-styles pl-6 text-shadow">{council.name}</h3>
              </div>
              <AnimatePresence>
                {selectedItem === index && (
                  <motion.div
                    className="pl-12 pr-10 flex flex-col gap-3 overflow-hidden"
                    variants={show}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                  >
                    <br />
                    <p className="opacity-75">{council.position}</p>
                    <p className="opacity-75">{council.role}</p>
                    <p className="opacity-75">{council.details}</p>
                    <ul className="flex flex-col mt-3">
                      {council.links.map((link, i) => (
                        <li key={i}>
                          <BlueText>{link}</BlueText>
                        </li>
                      ))}
                    </ul>
                    <br />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Council;
