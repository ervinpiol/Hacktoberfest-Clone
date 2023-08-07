import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { datas } from "./data/valuesData";
import { show } from "../../common/anim";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import { PlusButton } from "../../common/ShowButton";

const Values = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="values">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto">
        <LineSeparator />
        <Sim target="values" />
        <h2 className="h2-styles text-shadow">VALUES</h2>
        <ul className="flex flex-col gap-10 mt-10 font-medium">
          {datas.map((data, index) => (
            <li key={index} className="overflow-hidden">
              <div
                className="text-shadow flex cursor-pointer div_parent"
                onClick={() =>
                  setSelectedItem(selectedItem === index ? null : index)
                }
              >
                <PlusButton selectedItem={selectedItem} index={index} />
                <h5 className="text-xl">{data.h5Text}</h5>
              </div>
              <AnimatePresence>
                {selectedItem === index && (
                  <>
                    <div className="pt-3" />
                    <motion.p
                      className="opacity-50 ml-12"
                      variants={show}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition="transition"
                    >
                      {data.pText}
                      <div className="border-b pt-6" />
                    </motion.p>
                  </>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Values;
