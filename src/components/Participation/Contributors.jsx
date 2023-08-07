import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import BlueText from "../../common/BlueText";

const Contributors = () => {
  return (
    <div id="contributors">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="contributors" />
        <h2 className="h2-styles text-shadow">CONTRIBUTORS</h2>
        <h4 className="text-shadow mt-6 mb-4 h4-styles">
          HERE’S WHAT YOU NEED TO KNOW TO PARTICIPATE AND COMPLETE
          HACKTOBERFEST:
        </h4>
        <ul className="opacity-75 flex flex-col gap-6 mt-12 pl-4">
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4">
            Register anytime between September 26 and October 31
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4">
            Pull requests can be made in any <BlueText>GITHUB</BlueText> or{" "}
            <BlueText>GITLAB</BlueText> hosted project that’s participating in
            Hacktoberfest (look for the “hacktoberfest” topic)
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4">
            Project maintainers must accept your pull/merge requests for them to
            count toward your total
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4">
            Have 4 pull/merge requests accepted between October 1 and October 31
            to complete Hacktoberfest
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4">
            The first 40,000 participants (maintainers and contributors) who
            complete Hacktoberfest can elect to receive one of two prizes: a
            tree planted in their name, or the Hacktoberfest 2022 t-shirt.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contributors;
