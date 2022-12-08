import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
const Calender = ({ date, setDate }) => {
  return (
    <DateRange
      onChange={(item) => setDate([item.selection])}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
      minDate={new Date()}
      months={2}
      ranges={date}
      direction="horizontal"
      rangeColors={"rgba(199,199, 199, 0.2)"}
    />
  );
};

export default Calender;
