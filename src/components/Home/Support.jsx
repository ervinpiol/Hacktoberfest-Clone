import React from "react";
import Button from "../../common/Button/Button";

const Support = () => {
  return (
    <div>
      <div className="w-full xl:w-[1312px] mx-auto text-shadow flex flex-col items-center px-6 sm:px-16 xl:px-0">
        <h2 className="h2-styles text-center">SUPPORT OPEN SOURCE</h2>
        <h5 className="mt-6 text-xl text-center">
          PEN-SOURCE PROJECTS, MAINTAINED BY COMMUNITY-MINDED CODERS, MAKE THE
          MODERN INTERNET FUNCTION. SUPPORTING THAT ESSENTIAL WORK, AND THE
          FOLKS BEHIND IT, IS WHAT HACKTOBERFEST IS ALL ABOUT.
          <br />
          <br />
          YOU HAVE SKILLS THAT CAN HELP KEEP THESE PROJECTS CONTINUE
          RUNNING—LET’S GET TO IT.
        </h5>
        <Button>DONATE TO OPEN-SOURCE PROJECTS</Button>
      </div>
    </div>
  );
};

export default Support;
