import React from "react";
import Hero from "../common/Hero/Hero";
import GlobalEvents from "../components/EventsPage/GlobalEvents";
import Organizers from "../components/EventsPage/Organizers";
import Speakers from "../components/EventsPage/Speakers";
import Guidelines from "../components/EventsPage/Guidelines";
import EventsSvg from "../components/EventsPage/EventsSvg";

const Events = () => {
  return (
    <div>
      <Hero title="Events" gradient="orange-bg" svg={<EventsSvg />} />
      <GlobalEvents />
      <Organizers />
      <Speakers />
      <Guidelines />
    </div>
  );
};

export default Events;
