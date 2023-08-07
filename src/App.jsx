import React, { useEffect } from "react";
import Hacktoberfest from "./layout/Hacktoberfest";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  /*   useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []); */

  return (
    <BrowserRouter>
      <Hacktoberfest />
    </BrowserRouter>
  );
};

export default App;
