import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";

const Speakers = () => {
  return (
    <div id="speakers">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32 text-shadow">
        <LineSeparator />
        <Sim target="speakers" />
        <h2 className="h2-styles text-shadow">SPEAKERS & FACILITATORS</h2>
        <p className="mt-10">
          OPEN SOURCE EXPERTS AND COMMUNITY LEADERS ARE ALL IN ON HACKTOBERFEST.
          FIND THEM HELPING CONTRIBUTORS COMPLETE THEIR PULL/MERGE REQUESTS ALL
          MONTH LONG IN EVENTS THROUGHOUT OCTOBER.
        </p>
        <div className="mt-16">
          <p>[ HACKTOBERFEST #9 2022 HAS NOW ENDED. ]</p>
          <p>
            [ WE LOOK FORWARD TO SEEING YOU FOR HACKTOBERFEST 2023, WHERE WE CAN
            HOST EVEN MORE EVENTS! ]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
