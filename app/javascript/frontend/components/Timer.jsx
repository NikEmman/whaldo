import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { parseTime } from "../utils";

export default function Timer({ stopTimer, onTimeUpdate }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (!stopTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 100;
          onTimeUpdate(newTime);
          return newTime;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [stopTimer, onTimeUpdate]);

  const parsedTime = parseTime(time);

  return (
    <div className="timer">
      {`${parsedTime.hours}:${parsedTime.minutes}:${parsedTime.seconds}.${parsedTime.tenthsOfSecond}`}
    </div>
  );
}

Timer.propTypes = {
  stopTimer: PropTypes.bool.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};
