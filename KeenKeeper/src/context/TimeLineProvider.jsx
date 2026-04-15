import React, { useState } from "react";
import { TimeLineContext } from "./TimeLineContext";

const TimeLineProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const timeLineInfo = {
    events,
    setEvents,
  };

  return <TimeLineContext value={timeLineInfo}>{children}</TimeLineContext>;
};

export default TimeLineProvider;
