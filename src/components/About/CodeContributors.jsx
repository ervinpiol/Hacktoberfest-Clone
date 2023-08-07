import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import Table from "./Table";

const CodeContributors = () => {
  return (
    <div id="low-or-non-code">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32 overflow-hidden">
        <LineSeparator />
        <Sim isAbout target="low-or-non-code" />
        <h2 className="h2-styles text-shadow">LOW OR NON CODE CONTRIBUTIONS</h2>
        <div className="mt-10 mb-6 text-shadow">
          <p>
            CONTRIBUTING TO OPEN SOURCE ISN’T JUST FOR TECHNICAL FOLKS WHO WANT
            TO WRITE CODE. THERE ARE LOTS OF OPPORTUNITIES TO USE YOUR
            PROFESSIONAL SKILLS IN SUPPORT OF OPEN-SOURCE PROJECTS. THIS YEAR,
            WE’RE MAKING A POINT TO ENCOURAGE CONTRIBUTIONS THAT REQUIRE SOME
            TECHNICAL EXPERIENCE OR NONE AT ALL. NO MATTER YOUR EXPERIENCE, YOU
            CAN PARTICIPATE IN HACKTOBERFEST!
          </p>
          <br />
          <p>
            HACKTOBERFEST WELCOMES PEOPLE OF ANY EXPERIENCE LEVEL TO
            PARTICIPATE, AND LOW-CODE AND NON-CODE CONTRIBUTIONS ARE FANTASTIC
            CHOICES FOR FOLKS WHO DON’T HAVE A LOT OF TECHNICAL KNOWLEDGE. HERE
            ARE SOME EXAMPLES OF WAYS YOU CAN CONTRIBUTE TO OPEN-SOURCE
            PROJECTS:
          </p>
        </div>
        <Table />
        <p className="italic mt-6 text-shadow">
          CONTRIBUTORS SUBMITTING LOW- OR NON-CODE CONTENT TO PROJECTS SHOULD
          CREATE A PR/MR TO TRACK IT. WHILE HACKTOBERFEST TRACKS ALL PR/MRS
          SUBMITTED FOR THE EVENT, MAINTAINERS MAY NEED TO FACILITATE TRACKING
          OF THOSE CONTRIBUTIONS THROUGH AN ACTIVITY LOG OR SIMILAR.
        </p>
      </div>
    </div>
  );
};

export default CodeContributors;
