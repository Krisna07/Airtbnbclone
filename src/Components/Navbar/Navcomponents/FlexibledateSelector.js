import React, { useRef, useState } from "react";
import { RiCalendarLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect } from "react";

const FlexibleDateSelector = () => {
  const flexibilitoption = ["Weekend", "Week", "Month"];
  const [select, setSelect] = useState();

  const [right, setRight] = useState(0);

  const flexibleMonths = (month) => {
    const currentMonth = new Date().getMonth();
    const newMonth = new Date().setMonth(currentMonth + month);
    const parseMonth = new Date(newMonth).toDateString().split(" ")[1];
    const parseYear = new Date(newMonth).toDateString().split(" ")[3];

    return { month: parseMonth, year: parseYear, selected: false };
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
  const [monthsArray, setMonthsArray] = useState(
    requiredMonths(startMonth, endMonth)
  );
  const handleClick = (index) => {
    const updatedMonthsArray = [...monthsArray];
    updatedMonthsArray[index] = {
      ...updatedMonthsArray[index],
      selected: !updatedMonthsArray[index].selected,
    };
    setMonthsArray(updatedMonthsArray);
  };

  const MonthcontainerWidth = useRef(0);
  const visibleMonths = useRef(0);
  const [itemWith, setItemWidth] = useState(0);
  const [maxright, setMaxright] = useState();

  useEffect(() => {
    const monthWidth =
      MonthcontainerWidth.current.getBoundingClientRect().width;
    setItemWidth(monthWidth / 12);
    const visibleWidth = visibleMonths.current.getBoundingClientRect().width;
    setMaxright(monthWidth - visibleWidth);
  });
  const directionHanlder = (action) => {
    action === "add" ? setRight(right + itemWith) : setRight(right - itemWith);
  };

  return (
    <div className="flexibleContainer">
      <div className="flexibilitySelector">
        <h2>How long would you like to stay?</h2>
        <div className="flxibleDate">
          {flexibilitoption.map((date) => (
            <span
              key={date}
              className={`${date === select ? "activeFlexi" : ""}`}
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
          <div className="flexibleMonths" ref={visibleMonths}>
            <div
              className="flexibilityMonthContainer"
              style={{ left: `${-right}px` }}
              ref={MonthcontainerWidth}
            >
              {monthsArray.map((month) => (
                <div
                  key={month.month}
                  className={`monthObject ${
                    month.selected ? `selectedMonth` : ""
                  }`}
                  onClick={() => {
                    handleClick(monthsArray.indexOf(month));
                  }}
                >
                  <RiCalendarLine size={60} color={"gray"} />
                  <span style={{ fontWeight: "600" }}>{month.month}</span>
                  <span>{month.year}</span>
                </div>
              ))}
            </div>
          </div>

          <FaChevronLeft
            size={20}
            className="directionalIcon next"
            style={right <= 0 ? { display: "none" } : {}}
            onClick={() => directionHanlder("subtract")}
          />
          <FaChevronRight
            size={20}
            style={right >= maxright ? { display: "none" } : {}}
            className="directionalIcon prev"
            onClick={() => directionHanlder("add")}
          />
        </div>
      </div>
    </div>
  );
};
export default FlexibleDateSelector;
