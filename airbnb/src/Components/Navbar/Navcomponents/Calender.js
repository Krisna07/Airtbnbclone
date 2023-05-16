import React, { useState } from "react";
import { useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = ({ date, setDate }) => {
  const [localDate, setLocalDate] = useState({
    startDate: date.startDate ? date.startDate : new Date(),
    endDate: date.endDate ? date.endDate : new Date(),
    key: "selection",
  });

  const handleRangeConfirm = (ranges) => {
    setDate(ranges.selection);
  };
  useEffect(() => setLocalDate(date), [setDate]);
  return (
    <DateRange
      onChange={handleRangeConfirm}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      minDate={new Date()}
      months={2}
      ranges={[localDate]}
      direction="horizontal"
      rangeColors={"rgba(199,199, 199, 0.2)"}
    />
  );
};

export default Calender;
