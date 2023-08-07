import React from "react";

const LineSeparator = () => {
  return (
    <div className="mt-14 flex h-4 relative filter-shadow items-center">
      <div className="flex gap-1 h-1 absolute left-0 w-[20%] mb-4">
        <div className="w-1/4 bg-White h-full" />
        <div className="w-1/4 bg-White h-full" />
        <div className="w-3/4 bg-White h-full" />
      </div>
      <div className="w-1/2 h-[1px] bg-White self-end" />
      <div className="flex items-center h-full justify-center overflow-hidden w-4">
        <div className="w-[22px] h-[1px] bg-White -rotate-45 absolute" />
      </div>
      <div className="w-1/2 h-[1px] bg-White self-start" />
    </div>
  );
};

export default LineSeparator;
