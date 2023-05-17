import React from "react";
import { useState } from "react";
import { CircleSlider } from "react-circle-slider";
const MonthSelector = () => {
  const [month, selectMonth] = useState(0);

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
        Starting 23 June.{" "}
        <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Edit
        </span>
      </span>
    </div>
  );
};
export default MonthSelector;
