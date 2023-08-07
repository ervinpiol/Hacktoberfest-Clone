import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { datas } from "./organizersData";
import { show } from "../../../common/anim";
import { EmptyButton, PlusButton } from "../../../common/ShowButton";
import BlueText from "../../../common/BlueText";

const How = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h4 className="text-shadow mt-8 h4-styles">
        HOW TO ORGANIZE A HACKTOBERFEST EVENT
      </h4>
      <ul className="flex flex-col gap-10 mt-4 font-medium ">
        {datas.map((data, index) => (
          <li
            key={index}
            className="overflow-hidden"
            onClick={() =>
              setSelectedItem(selectedItem === index ? null : index)
            }
          >
            <div className="flex items-center  text-shadow cursor-pointer div_parent">
              <PlusButton selectedItem={selectedItem} index={index} />
              <h5 className="h5-styles">{data.h5Text}</h5>
            </div>
            <AnimatePresence>
              {selectedItem === index && (
                <motion.div
                  className="pl-10 opacity-75 text-base flex flex-col gap-5"
                  variants={show}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition="transition"
                >
                  <div />
                  {data.pText && <p>{data.pText}</p>}
                  {data.list && (
                    <ul className="flex flex-col gap-2.5">
                      {data.list.map((item, i) => (
                        <li
                          key={i}
                          className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="border-b opacity-50 pt-2" />
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
        <li>
          <div className="flex items-center  text-shadow cursor-pointer">
            <EmptyButton />{" "}
            <h5 className="h5-styles">
              SUBMIT THE{" "}
              <BlueText noArrow>HACKTOBERFEST NEW EVENT REQUEST FORM</BlueText>.
            </h5>
          </div>
        </li>
        <li>
          <div className="flex items-center  text-shadow cursor-pointer">
            <EmptyButton />{" "}
            <h5 className="h5-styles">
              FACILITATE THE EVENT, MAKING SURE TO CREATE AN OPEN, INCLUSIVE,
              AND WELCOMING ATMOSPHERE.
            </h5>
          </div>
        </li>
        <li>
          <div className="flex items-center text-shadow cursor-pointer">
            <EmptyButton />
            <h5 className="h5-styles">
              SHARE SPECIAL MOMENTS ON SOCIAL MEDIA USING #HACKTOBERFEST OR
              #HACKTOBERFEST2022 AND TAGGING @DIGITALOCEAN OR{" "}
              <BlueText noArrow>@HACKTOBERFEST</BlueText>. (REMEMBER TO ASK
              ATTENDEES FOR PERMISSION TO USE THEIR PHOTOS.)
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default How;
