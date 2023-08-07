import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";

const Maintainers = () => {
  return (
    <div id="maintainers">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="maintainers" />
        <h2 className="h2-styles text-shadow">MAINTAINERS</h2>
        <p className="opacity-75 mt-10">
          Prepare your project for contributions by following these best
          practices:
        </p>
        <ul className="opacity-75 pl-4 pt-8 flex flex-col gap-6">
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Add the “hacktoberfest” topic to your repository to OPT-IN TO
            HACKTOBERFEST and indicate you’re looking for contributions.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Apply the “hacktoberfest” label to issues you want contributors to
            help with in your GitHub or GitLab project.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Add a CONTRIBUTING.md file with contribution guidelines to your
            repository.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Choose issues that have a well-defined scope and are self-contained.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Adopt a code of conduct to create a greater sense of inclusion and
            community for contributors.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Be ready to review pull/merge requests, accepting those that are
            valid by merging them, leaving an overall approving review, or by
            adding the “hacktoberfest-accepted” label.
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Reject any spammy requests you receive by labeling them as “spam,”
            and any other invalid contributions by closing them or labeling them
            as “invalid.”
          </li>
        </ul>
        <h4 className="text-shadow mb-6 mt-8 h4-styles">
          REWARD FOR MAINTAINERS
        </h4>
        <p className="opacity-75">
          The hard work of our Maintainers is the reason Hacktoberfest exists,
          so we want you to have the opportunity to receive your very own
          Hacktoberfest 2022 reward. In order to become eligible for the
          opportunity to win a Reward Kit all a Maintainer will have to do is
          complete four or more maintainer actions on unique PR/MRs in repos
          participating in Hacktoberfest. Here are the Maintainer actions that
          qualify:
        </p>
        <ul className="opacity-75 pl-4 pt-3">
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Merge unique PR/MRs
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Provide an approving review of a PR/MR
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Add the “hacktoberfest-accepted” label
          </li>
          <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
            Add any label with the word “invalid” or “spam”
          </li>
        </ul>
        <p className="italic opacity-75 mt-8">
          *REWARD KITS ARE LIMITED; WE WILL REACH OUT TO QUALIFYING MAINTAINERS
          WHO ARE SELECTED TO RECEIVE A REWARD KIT AFTER HACKTOBERFEST ENDS.
        </p>
      </div>
    </div>
  );
};

export default Maintainers;
