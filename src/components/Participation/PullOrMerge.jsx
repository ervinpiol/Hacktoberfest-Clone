import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { datas } from "./data/prmrData";
import { show } from "../../common/anim";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import { PlusButton } from "../../common/ShowButton";
import BlueText from "../../common/BlueText";

const PullOrMerge = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="pr-mr-details">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="pr-mr-details" />
        <h2 className="h2-styles text-shadow">PULL/MERGE REQUEST DETAILS</h2>
        <p className="mt-10">
          HERE’S HOW WE VALIDATE CONTRIBUTOR PULL/MERGE REQUESTS (“PR/MRS”) FOR
          HACKTOBERFEST
        </p>
        <ul className="flex flex-col gap-10 mt-12">
          {datas.map((data, index) => (
            <li key={index} className="flex flex-col overflow-hidden">
              <div
                className="flex items-center gap-2 cursor-pointer div_parent"
                onClick={() =>
                  setSelectedItem(selectedItem === index ? null : index)
                }
              >
                <PlusButton selectedItem={selectedItem} index={index} />
                <div>
                  <p className="text-Yellow font-medium  text-shadow">
                    {data.yellowText}
                  </p>
                  <h4 className="text-shadow h4-styles">{data.question}</h4>
                </div>
              </div>
              <AnimatePresence>
                {selectedItem === index && (
                  <motion.div
                    className="ml-14 opacity-75 flex flex-col gap-4"
                    variants={show}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                  >
                    <div />
                    <p>
                      {data.answer1}{" "}
                      {index === 1 && (
                        <BlueText>LET US KNOW AND WE’LL TAKE A LOOK.</BlueText>
                      )}
                    </p>
                    {data.list && (
                      <ul className="flex flex-col gap-2.5">
                        {data.list.map((item) => (
                          <li
                            key={item}
                            className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {data.answer2 && <p>{data.answer2}</p>}
                    {data.answer3 && <p>{data.answer3}</p>}
                    <div className="border-b mt-3 opacity-50" />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PullOrMerge;
