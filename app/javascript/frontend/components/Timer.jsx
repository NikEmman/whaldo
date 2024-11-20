import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { formatTime } from "../utils";

const Timer = forwardRef(({ stopTimer }, ref) => {
  const [time, setTime] = useState(0);
  const timeRef = useRef(time);

  useImperativeHandle(ref, () => ({
    getCurrentTime: () => timeRef.current,
  }));

  useEffect(() => {
    let interval;
    if (!stopTimer) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 100;
          timeRef.current = newTime;
          return newTime;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [stopTimer]);

  const formattedTime = formatTime(time);

  return <div className="timer">{formattedTime}</div>;
});

export default Timer;
