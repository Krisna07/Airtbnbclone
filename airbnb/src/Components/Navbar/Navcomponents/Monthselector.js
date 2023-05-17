import React from "react";
import { useState } from "react";

const MonthSelector = () => {
  const [month, selectMonth] = useState(0);
  return (
    <div className="monthSelector">
      <h2>When's your trip?</h2>
      <div className="largeCircle">
        <div className="middleCircle">
          {month}
          <h3>Months</h3>
        </div>
      </div>
    </div>
  );
};
export default MonthSelector;
