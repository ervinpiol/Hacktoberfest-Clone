import React from "react";
import { motion } from "framer-motion";
import LineSeparator from "../../common/LineSeparator";

const ItsClose = () => {
  return (
    <div className="w-full xl:w-[1312px] mx-auto mt-16 px-6 sm:px-16 xl:px-0">
      <div className="text-shadow">
        <div className="flex gap-2">
          <span>&gt;&gt;</span>
          <motion.p
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.4, repeat: Infinity }}
          >
            REGISTRATION IS CLOSED
          </motion.p>
        </div>
        <br />
        <p>
          THANK YOU FOR MAKING CONTRIBUTIONS TO OPEN SOURCE. HACKTOBERFEST #9
          2022 HAS NOW ENDED.
        </p>
        <LineSeparator />
      </div>
    </div>
  );
};

export default ItsClose;
