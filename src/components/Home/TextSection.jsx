import React from "react";
import Button from "../../common/Button/Button";
import Separator from "../../common/Separator";
import BlueText from "../../common/BlueText";

const TextSection = () => {
  const partners = [
    "GITHUB",
    "GITHUB EDUCATION",
    "GITHUB SOCIAL IMPACT",
    "GITLAB",
    "OPENSAUCED",
    "HOLOPIN",
    "DEV",
    "OPEN COLLECTIVE",
    "KOTIS DESIGN",
    "TREE-NATION",
  ];

  return (
    <div>
      <div className="w-full xl:w-[1312px] mx-auto mt-16 text-shadow px-6 sm:px-16 xl:px-0">
        <Separator />
        <div className="flex">
          <div className="flex gap-5 items-center">
            &gt;&gt; BOOT DIALOGUE: SYSTEM PAUSED UNTIL 2023
            <div className="relative flex gap-[15px]">
              [<span className="equal"></span>]
            </div>
          </div>
        </div>
        <Button>JOIN THE HACKTOBERFEST DISCORD</Button>
        <p className="mt-12">
          A SPECIAL THANK YOU TO THE GREAT PEOPLE AT{" "}
          <BlueText noArrow>DIGITALOCEAN</BlueText>,{" "}
          <BlueText noArrow>APPWRITE</BlueText>,{" "}
          <BlueText noArrow>DOCKER</BlueText>, <BlueText noArrow>NOVU</BlueText>
          , <BlueText noArrow>RAPIDAPI</BlueText> AND{" "}
          <BlueText noArrow>DEVTRON</BlueText> FOR THEIR PARTNERSHIP AND SUPPORT
          OF HACKTOBERFEST. WE COULDN’T DO IT WITHOUT YOU!
        </p>
        <p className="mt-12">
          THANK YOU TO OUR COMMUNITY PARTNERS, WE &lt;3 YOU!
        </p>
        <ul className="flex gap-5 justify-center text-Blue mt-8 flex-wrap">
          {partners.map((partner, i) => (
            <li key={i}>
              <BlueText noArrow>{partner}</BlueText>
            </li>
          ))}
        </ul>
        <p className="my-12">
          KEEP CONTRIBUTING TO OPEN SOURCE. WE LOOK FORWARD TO SEEING YOU FOR
          HACKTOBERFEST 2023!
          <br />
          <br />- THE HACKTOBERFEST TEAM :)
        </p>
        <BlueText noArrow>WATCH THE HACKTOBERFEST 2022 RECAP -&gt;</BlueText>
      </div>
    </div>
  );
};

export default TextSection;
