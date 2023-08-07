import React, { useState } from "react";
import Sponsors from "./Sponsors";

const Projects = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <p className="opacity-75 text- mb-10">
          OPEN-SOURCE PROJECTS KEEP THE INTERNET HUMMING—BUT THEY CAN’T DO IT
          WITHOUT RESOURCES. PROJECTS ARE ALWAYS IN NEED OF FINANCIAL SUPPORT SO
          THEY CAN DEVELOP NEW FEATURES, COVER EXPENSES, AND CONTINUE THEIR
          REGULAR ACTIVITIES. FIND A PROJECT TO DONATE MONEY TO RIGHT HERE.
        </p>
        <input
          type="text"
          name=""
          id="text"
          placeholder="[ SEARCH PROJECTS...]"
          value={searchInput}
          className="w-full h-14 rounded-[4px] input-style px-4"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Sponsors searchInput={searchInput} />
      </div>
    </div>
  );
};

export default Projects;
