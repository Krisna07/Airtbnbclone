import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calender = ({ date, dateHandler }) => {
  const [localDate, setLocalDate] = useState({
    startDate: new Date(),
    key: "selection",
    endDate: new Date(),
  });
  console.log(date);
  const handleRangeConfirm = (ranges) => {
    setLocalDate(ranges.selection);
    console.log(localDate.startDate.toLocaleDateString());
    dateHandler("startDate", localDate.startDate.toLocaleDateString());
    dateHandler("endDate", localDate.endDate.toLocaleDateString());
  };

  return (
    <DateRange
      onChange={handleRangeConfirm}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      minDate={new Date()}
      months={2}
      ranges={localDate}
      direction="horizontal"
      rangeColors={"rgba(199,199, 199, 0.2)"}
    />
  );
};

export default Calender;
