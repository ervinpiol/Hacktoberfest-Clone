import React from "react";
import { resourcesData } from "./data/resourcesData";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import VideoPlayer from "../../common/VideoPlayer";
import BlueText from "../../common/BlueText";

const Resources = () => {
  return (
    <div id="beginner-resources">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="beginner-resources" />
        <h2 className="h2-styles text-shadow">RESOURCES FOR BEGINNERS</h2>
        {resourcesData.map((data, i) => (
          <div key={i}>
            <h4 className="text-shadow mt-10 mb-4 h4-styles">{data.title}</h4>
            <ul className="flex flex-col gap-6 mt-12 pl-4">
              {data.list.map((text, i) => (
                <li
                  key={i}
                  className="relative before:content-['-'] before:absolute before:-left-4 before:w-4"
                >
                  {text.whiteText && (
                    <span className="opacity-75">{text.whiteText}</span>
                  )}{" "}
                  <BlueText>{text.blueText}</BlueText>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <VideoPlayer source="https://www.youtube-nocookie.com/embed/nkuYH40cjo4?modestbranding=1&rel=0" />
      </div>
    </div>
  );
};

export default Resources;
