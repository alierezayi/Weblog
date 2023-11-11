"use client";

import { useState, useEffect } from "react";

const TimeAgo = ({
  dateString,
  className,
}: {
  dateString: string;
  className: string;
}) => {
  const [timeAgoString, setTimeAgoString] = useState("");

  useEffect(() => {
    const now: any = new Date();
    const date: any = new Date(dateString);
    const diffInMs = now - date;

    // Calculate the number of minutes, hours, days, weeks, months, and years
    const diffInMinutes = Math.round(diffInMs / 60000);
    const diffInHours = Math.round(diffInMs / 3600000);
    const diffInDays = Math.round(diffInMs / 86400000);
    const diffInWeeks = Math.round(diffInMs / 604800000);
    const diffInMonths = Math.round(diffInMs / 2592000000);
    const diffInYears = Math.round(diffInMs / 31536000000);

    // Use the appropriate description based on the time elapsed
    if (diffInMinutes < 1) {
      setTimeAgoString("Just now");
    } else if (diffInMinutes < 60) {
      setTimeAgoString(`${diffInMinutes} Minutes ago`);
    } else if (diffInHours < 24) {
      setTimeAgoString(`${diffInHours} Hours ago`);
    } else if (diffInDays < 7) {
      setTimeAgoString(`${diffInDays} Days ago`);
    } else if (diffInWeeks < 4) {
      setTimeAgoString(`${diffInWeeks} Weeks ago`);
    } else if (diffInMonths < 12) {
      setTimeAgoString(`${diffInMonths} Month ago`);
    } else if (diffInYears < 10) {
      setTimeAgoString(`${diffInYears} Years ago`);
    } else {
      setTimeAgoString("Many years");
    }
  }, [dateString]);

  return <span className={className}>{timeAgoString}</span>;
};

export default TimeAgo;
