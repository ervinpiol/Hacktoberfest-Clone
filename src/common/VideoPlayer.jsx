import React from "react";
import SideNumbers from "./SideNumbers/SideNumbers";

const VideoPlayer = ({ source }) => {
  return (
    <div className="mt-16">
      <div className="w-full lg:max-w-[48rem] mx-auto video-style sparkle">
        <SideNumbers isYellow />
        <div>
          <iframe
            src={source}
            title="YouTube video player: Open Source is Counting on You! Answer the Call, at Hacktoberfest 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full rounded-lg aspect-video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
