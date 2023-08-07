import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { show } from "../../../common/anim";
import BlueText from "../../../common/BlueText";
import { EmptyButton, PlusButton } from "../../../common/ShowButton";

const PandR = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div>
      <h4 className="text-shadow mt-10 h4-styles">
        EVENT PLATFORMS & RESOURCES
      </h4>
      <ul className="flex flex-col gap-10 mt-4 font-medium">
        <li>
          <div className="flex items-center  text-shadow">
            <EmptyButton />{" "}
            <h5 className="h5-styles">HOST YOUR EVENT ONLINE OR IN PERSON</h5>
          </div>
          <div className="pl-12 pt-5 opacity-50 text-base">
            <p>
              Hacktoberfest is primarily online, but we encourage people to run
              in-person events—just be sure to abide by local health and safety
              regulations.
            </p>
          </div>
        </li>
        <li>
          <div className="flex items-center  text-shadow">
            <EmptyButton /> <h5 className="h5-styles">EVENT CODE OF CONDUCT</h5>
          </div>
          <div className="pl-12 pt-5 text-base">
            <p>
              <span className="opacity-50">
                Hacktoberfest meetups are welcoming, open, and inclusive.
                Include this line on your meetup page: “Please read our
              </span>{" "}
              <BlueText>EVENTS CODE OF CONDUCT</BlueText>{" "}
              <span className="opacity-50">
                before attending. Happy hacking!”
              </span>
            </p>
          </div>
        </li>
        <li className="overflow-hidden cursor-pointer">
          <div
            className="flex items-center  text-shadow div_parent"
            onClick={() => setSelectedItem(!selectedItem)}
          >
            <PlusButton selectedItem={selectedItem} />{" "}
            <h5 className="h5-styles">HOW TO PROMOTE YOUR EVENT</h5>
          </div>
          <AnimatePresence>
            {selectedItem && (
              <motion.ul
                className="pl-12 flex flex-col gap-2.5"
                variants={show}
                initial="initial"
                animate={{ opacity: 1, height: "auto" }}
                exit="exit"
                transition="transition"
              >
                <li className="pt-3"></li>
                <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                  <span className="opacity-50">Submit an</span>{" "}
                  <BlueText>OFFICIAL EVENT REQUEST</BlueText>.
                </li>
                <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                  <span className="opacity-50">
                    Remind your attendees to RSVP on the Hacktoberfest
                  </span>{" "}
                  <BlueText>EVENTS</BlueText>{" "}
                  <span className="opacity-50">page</span>
                </li>
                <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4 opacity-50">
                  Share the event via email, social networks, and events
                  websites. Consider posting on channels that are popular with
                  developers and open source enthusiasts in your area, such as
                  Meetup, Eventbrite, Twitter, etc…
                </li>
                <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                  <span className="opacity-50">Tag @digitalocean,</span>{" "}
                  <BlueText>@HACKTOBERFEST</BlueText>,{" "}
                  <span className="opacity-50">
                    #hacktoberfest, #hacktoberfest2022
                  </span>
                </li>
                <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4 flex flex-col opacity-50">
                  <p>Use these example posts for inspiration:</p>
                  <ul>
                    <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                      "Happy about Hacktoberfest? So are we! Register to hack
                      with us on [DATE!]
                    </li>
                    <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                      “Don’t hack alone. Join us on [DATE] to meet a few
                      community members and get help on your pull requests!”
                    </li>
                    <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                      “I just donated to the open-source community, it’s your
                      turn!”
                    </li>
                    <li className="relative before:content-['-'] before:absolute before:-left-4 before:w-4 ml-4">
                      “Learning how to code or just interested in open source?
                      Sign up to share your skills!”
                    </li>
                  </ul>
                  <div className="border-b opacity-50 pt-6" />
                </li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
        <li>
          <div className="flex items-center  text-shadow">
            <EmptyButton /> <h5 className="h5-styles">LOGOS AND BRANDING</h5>
          </div>
          <div className="pl-12 pt-5 text-base">
            <p className="">
              <span className="opacity-50">
                Logos, banners, posters, and more! We kindly ask that you adopt
              </span>{" "}
              <BlueText>HACKTOBERFEST BRAND GUIDELINES</BlueText>{" "}
              <span className="opacity-50">
                as you share your meetup/content.
              </span>
            </p>
            <p className="text-Blue pt-5">
              <BlueText>DOWNLOAD ASSETS</BlueText>
            </p>
          </div>
        </li>
        <li>
          <div className="flex items-center  text-shadow">
            <EmptyButton /> <h5 className="h5-styles">VIRTUAL EVENT SWAG</h5>
          </div>
          <div className="pl-12 pt-5 text-base">
            <p className="">
              <span className="opacity-50">
                Everyone loves swag! Check out the
              </span>{" "}
              <BlueText>DIGITALOCEAN SWAG STORE</BlueText>{" "}
              <span className="opacity-50">and download this year’s</span>{" "}
              <BlueText>VIRTUAL EVENT SWAG</BlueText>.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PandR;
