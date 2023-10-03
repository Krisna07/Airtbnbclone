import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CircleSlider } from "react-circle-slider";
const MonthSelector = ({ date, dateHandler }) => {
  const [month, selectMonth] = useState(0);
  const startDate = date.startDate ? date.startDate : new Date();
  const displayDate = startDate.toDateString().split(" ");
  const endDate = date.endDate ? date.endDate : new Date();
  const SetEndDate = endDate.setMonth(month - 1);
  useEffect(() => {
    dateHandler("endDate", endDate);
  }, [month]);

  return (
    <div className="monthSelector">
      <h2>When's your trip?</h2>
      <div className="largeCircle">
        <CircleSlider
          value={month}
          size={450}
          width={"100%"}
          max={12}
          min={0}
          knobRadius={25}
          progressWidth={50}
          startAngle={0}
          circleWidth={50}
          progressColor="black"
          onChange={(month) => selectMonth(month)}
        />
        <div className="middleCircle">
          <span> {month}</span>
          <h3>Months</h3>
        </div>
      </div>
      <span>
        Starting {displayDate[2]} {displayDate[1]}.{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Edit
        </span>
      </span>
    </div>
  );
};
export default MonthSelector;
