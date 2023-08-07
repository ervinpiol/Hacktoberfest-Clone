import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import nav from "../../assets/common/nav.svg";

const Navigation = ({ navigations }) => {
  const [isBig, setIsBig] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);
  const y = useMotionValue(0);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isBigScreen = useMediaQuery({ maxWidth: 1280 });

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      y.set(scrollY);
      if (scrollY > 75) {
        setIsBig(true);
      } else {
        setIsBig(false);
        setIsNavOpen(true);
      }
    }

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [y]);

  const navVariants = {
    initial: {
      width: 200,
      top: isMobile ? "auto" : 10,
      bottom: isMobile ? 40 : "auto",
    },
    big: {
      width: isBigScreen ? "90vw" : 1312,
      top: isMobile ? "auto" : -60,
      bottom: isMobile ? 40 : "auto",
    },
  };

  const location = useLocation();

  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        className="z-20 filter-shadow"
        initial={{
          top: isMobile ? "auto" : -300,
          bottom: isMobile ? -300 : "auto",
        }}
        animate={{
          top: isMobile ? "auto" : "100px",
          bottom: isMobile ? 0 : "auto",
          position: "fixed",
          translateX: "-50%",
          left: "50%",
        }}
        transition={{ type: "spring", stiffness: 95 }}
      >
        <motion.div
          className={`flex justify-between fixed left-1/2 -translate-x-1/2 bg-DarkViolet overflow-hidden z-10 ${
            isBig ? "py-4 px-6 rounded-2xl" : "rounded-full pr-1 pl-3 h-12"
          } ${isBig && isMobile ? "" : "items-center"}`}
          variants={navVariants}
          initial="initial"
          animate={isBig ? "big" : "initial"}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {isBig && isNavOpen ? (
            <nav className="flex gap-6 flex-wrap">
              {navigations.map((nav, i) => (
                <a key={i} href={nav.link}>
                  {nav.name}
                </a>
              ))}
            </nav>
          ) : (
            <>
              <img
                src={nav}
                alt="nav"
                className={`${!isNavOpen && "hidden"}`}
              />
              <p className={`dot w-[68px] flex ${!isNavOpen && "hidden"}`}>
                INIT
              </p>
            </>
          )}
          <div
            className={`flex items-center justify-between ${
              isNavOpen ? "flex-col" : "flex-row w-full"
            }`}
          >
            <div className=" bg-black w-10 h-10 flex items-center justify-center rounded-full">
              <div className="nav-ball relative overflow-hidden w-6 h-6 rounded-full" />
            </div>
            {isBig && isMobile && (
              <button
                className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 border-2 p-1 rounded"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <div
                  className={`w-4/5 h-0.5 bg-white ${
                    isNavOpen &&
                    "rotate-45 relative top-1 transition-all duration-700 ease-in-out"
                  }`}
                />
                <div
                  className={`w-4/5 h-0.5 bg-white ${
                    isNavOpen &&
                    "-rotate-45 relative bottom-1 transition-all duration-700 ease-in-out"
                  }`}
                />
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigation;
