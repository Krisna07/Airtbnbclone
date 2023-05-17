import React, { useState } from "react";
import { RiCalendarLine } from "react-icons/ri";

const FlexibleDateSelector = () => {
  const flexibilitoption = ["Weekend", "Week", "Month"];

  const [select, setSelect] = useState();
  const [selectMonth, setSelectMonth] = useState([]);
  const flexibleMonths = (month) => {
    const currentMonth = new Date().getMonth();
    const newMonth = new Date().setMonth(currentMonth + month);
    const parseMonth = new Date(newMonth).toDateString().split(" ")[1];
    const parseYear = new Date(newMonth).toDateString().split(" ")[3];

    return { month: parseMonth, year: parseYear };
  };
  const requiredMonths = (startMonth, endMonth) => {
    const months = [];
    for (let i = startMonth; i <= endMonth; i++) {
      const result = flexibleMonths(i);
      months.push(result);
    }
    return months;
  };
  const startMonth = 0;
  const endMonth = 11;
  const monthsArray = requiredMonths(startMonth, endMonth);
  console.log(monthsArray);
  console.log(selectMonth);
  return (
    <div className="flexibleContainer">
      <div className="flexibilitySelector">
        <h2>How long would you like to stay?</h2>
        <div className="flxibleDate">
          {flexibilitoption.map((date) => (
            <span
              key={date}
              className={`${date == select ? "activeFlexi" : ""}`}
              onClick={() => setSelect(date)}
            >
              {date}
            </span>
          ))}
        </div>
      </div>
      <div className="flexibilitySelector">
        <h2>When do you want to go?</h2>
        <div className="flexibilityMonth">
          <div className="flexibilityMonthContainer">
            {monthsArray.map((month) => (
              <div
                key={month.month}
                className={`monthObject ${
                  selectMonth.includes(month.month) ? `selectedMonth` : ""
                }`}
                onClick={() =>
                  setSelectMonth([...selectMonth, `${month.month}`])
                }
              >
                <RiCalendarLine size={60} color={"gray"} />
                <span style={{ fontWeight: "600" }}>{month.month}</span>
                <span>{month.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlexibleDateSelector;
