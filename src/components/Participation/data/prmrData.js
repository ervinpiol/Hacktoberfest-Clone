export const datas = [
  {
    yellowText: "[ OUT-OF-BOUNDS ]",
    question: "YOUR PR/MRS MUST BE WITHIN THE BOUNDS OF HACKTOBERFEST.",
    answer1:
      "Your PR/MRs must be created between October 1 and October 31 (in any time zone, UTC-12 thru UTC+14).",
    answer2: "Your PR/MRs must be made to a public, unarchived repository.",
  },
  {
    yellowText: "[ EXCLUDED ]",
    question:
      "REPOS THAT GO AGAINST HACKTOBERFEST’S VALUES WILL BE EXCLUDED FROM QUALIFICATION AND PR/MRS MADE TO THOSE REPOS WON’T COUNT.",
    answer1:
      "Found a repository that goes against the values of Hacktoberfest?",
  },
  {
    yellowText: "[ SPAM ]",
    question: "YOUR PR/MRS MUST NOT BE SPAMMY.",
    answer1:
      "PR/MRs that are labeled with a label containing the word “spam” by maintainers will not be counted.",
    list: [
      "We use the Node.js 16 RegEx engine with /\bspam\b/i to look for spam labels.",
      "PR/MRs that also have the “hacktoberfest-accepted” label cannot be marked as spammy via a label.",
      "PR/MRs that have been merged and do not have a label containing the word “invalid” cannot be marked as spammy via a label.",
    ],
    answer2:
      "PR/MRs that our system detects as spammy will also not be counted.",
    answer3: "Any user with two or more spammy PR/MRs will be disqualified.",
  },
  {
    yellowText: "[ PARTICIPATING ]",
    question:
      "YOUR PR/MRS MUST BE IN A REPO TAGGED WITH THE “HACKTOBERFEST” TOPIC, OR HAVE THE “HACKTOBERFEST-ACCEPTED” LABEL.",
    answer1:
      "Hacktoberfest is now opt-in for maintainers, so only contribute to projects that indicate they’re looking for Hacktoberfest PR/MRs.",
    answer2:
      "Once your PR/MR has passed this check, we won’t check this again (unless your PR/MR fails a check before this, such as it being marked as spammy).",
  },
  {
    yellowText: "[ INVALID ]",
    question: "YOUR PR/MRS MUST NOT BE LABELED AS “INVALID”.",
    answer1:
      "PR/MRs that have a label containing the word “invalid” won’t be counted, unless they also have the “hacktoberfest-accepted” label.",

    list: [
      "Specifically, we use the Node.js 16 RegEx engine with /\binvalid\b/i to look for invalid labels.",
    ],
  },
  {
    yellowText: "[ ACCEPTED ]",
    question:
      "YOUR PR/MRS MUST BE MERGED, HAVE THE “HACKTOBERFEST-ACCEPTED” LABEL, OR HAVE AN OVERALL APPROVING REVIEW.",
    answer1: "Your PR/MR must not be a draft to be considered accepted.",
    answer2:
      "If your PR/MR is being accepted for Hacktoberfest via an overall approving review it must also not be closed.",
  },
  {
    question:
      "ONCE YOUR PR/MRS PASS ALL THE CHECKS ABOVE, IT WILL BE ACCEPTED FOR HACKTOBERFEST AFTER THE 7-DAY REVIEW PERIOD.",
    answer1:
      "We continually evaluate all of the checks except the [PARTICIPATING] check. If it fails any of these checks during this time, the 7-day timer will reset.",
    answer2:
      "After the 7-day review period completes, your PR/MR will be automatically accepted for Hacktoberfest assuming it still passes all the checks. Once accepted for Hacktoberfest, we stop checking. :party:",
  },
];
