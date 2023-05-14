import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = ({ date, setDate }) => {
  const [localDate, setLocalDate] = useState({
    startDate: date.startDate ? date.startDate : new Date(),
    key: "selection",
    endDate: date.endDate ? date.endDate : new Date(),
  });
  console.log(date);
  const handleRangeConfirm = (ranges) => {
    setLocalDate(ranges.selection);
    console.log(localDate);
    // dateHandler("startDate", localDate.startDate);
    // dateHandler("endDate", localDate.endDate);
  };

  return (
    <DateRange
      onChange={(item) => setDate(item.selection)}
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
