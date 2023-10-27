"use client";

import { cn } from "@/libs/utils";
import React, { HTMLAttributes, useEffect, useState } from "react";

interface CountdownTimerProps extends HTMLAttributes<HTMLDivElement> {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  className,
  ...props
}) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate.getTime() - now;

    return {
      timeDifference,
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.timeDifference <= 0) {
    return null; // Component will not render if targetDate is reached or surpassed.
  }

  return (
    <div
      className={cn(
        "inline-flex flex-col text-center p-5 border rounded-md bg-white shadow-lg",
        className
      )}
      {...props}
    >
      <div className="flex justify-center space-x-6" role="presentation">
        <time
          dateTime={`P${timeLeft.days}D`}
          className="flex flex-col items-center"
        >
          <div className="text-lg font-bold">{timeLeft.days}</div>
          <div className="text-xs text-slate-500 mt-1">d</div>
        </time>
        <time
          dateTime={`PT${timeLeft.hours}H`}
          className="flex flex-col items-center"
        >
          <div className="text-lg font-bold">{timeLeft.hours}</div>
          <div className="text-xs text-slate-500 mt-1">h</div>
        </time>
        <time
          dateTime={`PT${timeLeft.minutes}M`}
          className="flex flex-col items-center"
        >
          <div className="text-lg font-bold">{timeLeft.minutes}</div>
          <div className="text-xs text-slate-500 mt-1">m</div>
        </time>
        <time
          dateTime={`PT${timeLeft.seconds}S`}
          className="flex flex-col items-center"
        >
          <div className="text-lg font-bold">{timeLeft.seconds}</div>
          <div className="text-xs text-slate-500 mt-1">s</div>
        </time>
      </div>
    </div>
  );
};

export default CountdownTimer;
