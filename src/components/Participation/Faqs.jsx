import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { datas } from "./data/faqsData";
import { show } from "../../common/anim";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import { PlusButton } from "../../common/ShowButton";

const Faqs = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div id="faqs">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="faqs" />
        <h2 className="h2-styles text-shadow">FAQS</h2>
        <h3 className="h3-styles text-shadow mt-10">SWAG & SHIPPING</h3>
        <ul className="flex flex-col gap-6 mt-8">
          {datas.map((data, index) => (
            <li key={index} className="overflow-hidden flex flex-col gap-4">
              <div
                className="flex items-center cursor-pointer div_parent"
                onClick={() =>
                  setSelectedItem(selectedItem === index ? null : index)
                }
              >
                <PlusButton selectedItem={selectedItem} index={index} />
                <p className="text-2xl opacity-75">{data.question}</p>
              </div>
              <AnimatePresence>
                {selectedItem === index && (
                  <motion.ul
                    className="flex flex-col gap-3 ml-12 opacity-75"
                    variants={show}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                  >
                    {data.answers.map((answer, i) => (
                      <li key={i}>{answer}</li>
                    ))}
                    <li className="border-b pt-3" />
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
