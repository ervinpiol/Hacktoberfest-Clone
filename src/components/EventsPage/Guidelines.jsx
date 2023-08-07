import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import Button from "../../common/Button/Button";

const Guidelines = () => {
  return (
    <div id="brand">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32 text-shadow">
        <LineSeparator />
        <Sim target="brand" />
        <h2 className="h2-styles text-shadow">BRAND GUIDELINES</h2>
        <p className="mt-10">
          IF YOU PLAN TO USE THE HACKTOBERFEST BRAND IN PROMOTIONAL MATERIAL,
          YOU’LL NEED TO ABIDE BY OUR BRAND USE GUIDELINES. ACCESS THEM HERE AND
          DIVE IN.
        </p>
        <Button>VIEW HACKTOBERFEST BRAND GUIDELINES</Button>
      </div>
    </div>
  );
};

export default Guidelines;
