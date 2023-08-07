import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import Button from "../../common/Button/Button";
import How from "./Organizers/How";
import PandR from "./Organizers/PandR";

const Organizers = () => {
  return (
    <div id="organizers">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="organizers" />
        <h2 className="h2-styles text-shadow">EVENT ORGANIZERS</h2>
        <p className="mt-10 text-shadow">
          HACKTOBERFEST EVENTS ARE HAPPENING ALL MONTH LONG SO YOU CAN JOIN YOUR
          FRIENDS DAY OR NIGHT, FROM DUSK TO DAWN, AS YOU WORK TO COMPLETE YOUR
          PULL/MERGE REQUESTS.
        </p>
        <Button>DOWNLOAD THE KIT</Button>
        <How />
        <PandR />
      </div>
    </div>
  );
};

export default Organizers;
