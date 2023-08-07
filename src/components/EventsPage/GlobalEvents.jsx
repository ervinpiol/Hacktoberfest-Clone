import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";

const GlobalEvents = () => {
  return (
    <div id="events">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32 text-shadow ">
        <LineSeparator />
        <Sim target="events" />
        <h2 className="h2-styles text-shadow">GLOBAL EVENTS</h2>
        <p className="mt-10">
          HACKTOBERFEST EVENTS ARE HAPPENING ALL MONTH LONG SO YOU CAN JOIN YOUR
          FRIENDS DAY OR NIGHT, FROM DUSK TO DAWN, AS YOU WORK TO COMPLETE YOUR
          PULL/MERGE REQUESTS.
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

export default GlobalEvents;
