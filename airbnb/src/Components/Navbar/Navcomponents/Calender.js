import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const Calender = ({ dateHandler }) => {
  const date = [
    {
      startDate: new Date(),
      key: "selection",
      endDate: new Date(),
    },
  ];
  return (
    <DateRange
      onChange={(item) => dateHandler("startDate", item.selection.startDate)}
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
