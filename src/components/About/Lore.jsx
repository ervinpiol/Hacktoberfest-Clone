import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import VideoPlayer from "../../common/VideoPlayer";

const Lore = () => {
  return (
    <div id="lore">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32 text-shadow ">
        <LineSeparator />
        <Sim target="lore" />
        <h2 className="h2-styles text-shadow">HACKTOBERFEST LORE</h2>
        <div className="mt-10">
          <p>
            HACKTOBERFEST IS DIGITALOCEAN’S ANNUAL EVENT THAT ENCOURAGES PEOPLE
            TO CONTRIBUTE TO OPEN SOURCE THROUGHOUT OCTOBER. MUCH OF MODERN TECH
            INFRASTRUCTURE—INCLUDING SOME OF DIGITALOCEAN’S OWN PRODUCTS—RELIES
            ON OPEN-SOURCE PROJECTS BUILT AND MAINTAINED BY PASSIONATE PEOPLE
            WHO OFTEN DON’T HAVE THE STAFF OR BUDGETS TO DO MUCH MORE THAN KEEP
            THE PROJECT ALIVE. HACKTOBERFEST IS ALL ABOUT GIVING BACK TO THOSE
            PROJECTS, SHARPENING SKILLS, AND CELEBRATING ALL THINGS OPEN SOURCE,
            ESPECIALLY THE PEOPLE THAT MAKE OPEN SOURCE SO SPECIAL.
          </p>
          <br />
          <p>
            FOR THE PAST 9 YEARS, THOUSANDS OF PEOPLE—CODERS AND NON-CODERS
            ALIKE—HAVE PARTICIPATED IN HACKTOBERFEST TO SUPPORT THE PROJECTS
            THEY USE AND LOVE, LEARN AND PRACTICE SKILLS THAT WILL ENHANCE THEIR
            CAREERS, AND MEET NEW PEOPLE WHO LOVE OPEN SOURCE AS MUCH AS THEY
            DO.
          </p>
        </div>
        <VideoPlayer source="https://www.youtube-nocookie.com/embed/BDUtORDL_k4?modestbranding=1&amp;rel=0" />
      </div>
    </div>
  );
};

export default Lore;
