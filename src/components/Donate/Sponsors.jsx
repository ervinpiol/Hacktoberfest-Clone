import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { projects } from "./projectsData";
import Button from "../../common/Button/Button";
import { PlusButton } from "../../common/ShowButton";
import { show } from "../../common/anim";

const Sponsors = ({ searchInput }) => {
  const initialProject = 3;
  const [visibleProjects, setVisibleProject] = useState(initialProject);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleProjects = () => {
    if (visibleProjects < projects.length) {
      setVisibleProject((prev) => prev + 3);
    } else {
      setVisibleProject(initialProject);
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.h3Text.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
      <div className="mt-16 gradient-border relative">
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            className={`lg:pl-6 pt-10 pb-20 group cursor-pointer overflow-hidden ${
              index !== projects.length - 1 && "border-b"
            }`}
          >
            <div>
              <div
                className="flex items-start lg:items-center relative div_parent"
                onClick={() =>
                  setSelectedItem(selectedItem === index ? null : index)
                }
              >
                <PlusButton
                  selectedItem={selectedItem}
                  index={index}
                  isAbsolute
                />
                <div>
                  <p className="text-Pink mb-4 text-shadow ml-12 lg:ml-0">
                    [ GITHUB SPONSORS ]
                  </p>
                  <div className="flex items-start lg:items-center gap-4 flex-col lg:flex-row">
                    <img
                      src={project.image}
                      alt={project.h3Text}
                      className="w-16 rounded-2xl filter-shadow"
                    />
                    <div>
                      <h3 className="text-2xl text-shadow mb-4">
                        {project.h3Text}
                      </h3>
                      <p>{project.pText}</p>
                    </div>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                {selectedItem === index && (
                  <motion.div
                    className="ml-10"
                    variants={show}
                    initial="initial"
                    animate={{ opacity: 1, height: "auto" }}
                    exit="exit"
                    transition="transition"
                  >
                    <br />
                    <Button isPink>{project.buttonText}</Button>
                    <div className="border-b pt-10 opacity-50" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
      <Button toggleProjects={toggleProjects}>
        {visibleProjects < projects.length
          ? "LOAD MORE PROJECTS"
          : "SHOW LESS PROJECTS"}
      </Button>
    </div>
  );
};

export default Sponsors;
