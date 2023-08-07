import React from "react";
import LineSeparator from "../../common/LineSeparator";
import Sim from "../../common/Sim";
import BlueText from "../../common/BlueText";

const Spam = () => {
  return (
    <div id="spam">
      <div className="w-full xl:w-[1312px] px-6 sm:px-16 xl:px-0 mx-auto mt-32">
        <LineSeparator />
        <Sim target="spam" />
        <h2 className="h2-styles text-shadow">MEASURES TO REDUCE SPAM</h2>
        <div className="mt-10 flex flex-col gap-6">
          <div>
            <h4 className="text-shadow mb-6 h4-styles">
              SPAMMY PULL/MERGE REQUESTS WILL BE LABELED AS “SPAM.” .
            </h4>
            <p className="opacity-75">
              Maintainers: label spammy requests “spam” and close them. PR/MRs
              labeled “spam” won’t count toward Hacktoberfest. Contributors with
              2+ spammy PR/MRs are disqualified
            </p>
          </div>
          <div>
            <h4 className="text-shadow mb-6 h4-styles">
              PULL/MERGE REQUESTS MUST BE APPROVED BY A MAINTAINER.
            </h4>
            <p className="opacity-75">
              Maintainers accept PR/MRs by merging them, labeling them
              “hacktoberfest-accepted,” or giving them an overall approving
              review. Accepted PR/MRs enter a 7-day review window, during which
              approval can be revoked by the maintainer or by our team.
            </p>
          </div>
          <div>
            <h4 className="text-shadow mb-6 h4-styles">
              BAD REPOSITORIES WILL BE EXCLUDED.
            </h4>
            <p className="opacity-75">
              PR/MRs should be useful to maintainers. Repos that encourage
              simplistic PR/MRs (like adding a name or profile to a list or
              arbitrarily curating content) will be excluded from Hacktoberfest.
              Remember: quantity is fun, quality is key.
            </p>
            <p className="opacity-75">
              Found a repository that you think doesn’t follow our values?{" "}
              <BlueText>REPORT IT TO US AND WE’LL TAKE A LOOK</BlueText>.
            </p>
          </div>
          <div>
            <h4 className="text-shadow mb-6 h4-styles">
              AVOID SUBMITTING LOW-QUALITY PULL/MERGE REQUESTS.
            </h4>
            <p className="opacity-75">
              Hacktoberfest is about contributing meaningfully to open-source
              projects. Here are some examples of low-quality pull/merge
              requests that won’t count towards Hacktoberfest.
            </p>
            <ul className="opacity-75 pl-4 pt-2 pb-6">
              <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
                Automated pull/merge requests: scripted opening pull requests to
                remove whitespace, fix typos or optimize images.
              </li>
              <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
                Disruptive pull/merge requests: taking someone else’s
                branch/commits and making a pull request.
              </li>
              <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
                Anything that a project maintainer flags as spam.
              </li>
              <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 flex gap-3">
                Anything that looks like an attempt to duplicate your pull
                request count for October.
              </li>
            </ul>
            <p className="opacity-75">
              Multiple pull/merge requests for the same issue that are
              unnecessary -for example five PR/MRs to remove a stray whitespace
              is not.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spam;
