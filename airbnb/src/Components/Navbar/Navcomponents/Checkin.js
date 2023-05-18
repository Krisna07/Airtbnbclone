import { setDate } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import Calender from "./Calender";
import FlexibleDateSelector from "./FlexibledateSelector";
import MonthSelector from "./Monthselector";

const Checkin = ({
  hoverItem,
  leavehover,
  activeSelect,
  date,
  dateHandler,
  calenderHandler,
  selectedOpt,
  setDate,
}) => {
  const [dateSelector, setDateSelector] = useState("Date");
  const dateSelectorsType = ["Date", "Month", "Flexible"];
  return (
    <div
      className="expandabletab checkin"
      onMouseOver={hoverItem}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "checkin" ? "white" : ""}`,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          onClick={(e) => {
            selectedOpt("checkin");
            calenderHandler();
          }}
          className="expandabletabselect"
        >
          Check in
          <span>
            {date.startDate
              ? date.startDate.toLocaleDateString()
              : "Choose date"}
          </span>
        </div>
        {date.startDate ? (
          <span className="removeStart remove-date">
            {" "}
            <RiCloseFill
              color="red"
              onClick={() => {
                dateHandler("startDate", null);
              }}
            />
          </span>
        ) : (
          ""
        )}
      </div>

      {activeSelect === "checkin" || activeSelect === "checkout" ? (
        <div
          className="loactionOpts"
          style={{
            display: "flex",
          }}
        >
          <div className="dateOpt">
            {dateSelectorsType.map((selector, x) => (
              <div
                className={`dateOpt-nav ${
                  selector === dateSelector ? `active` : ""
                }`}
                key={x}
                onClick={() => setDateSelector(selector)}
              >
                {selector}
              </div>
            ))}
          </div>
          <div className="twinCalender">
            {dateSelector === "Date" ? (
              <Calender date={date} setDate={setDate} />
            ) : (
              ""
            )}
            {dateSelector === "Month" ? (
              <MonthSelector date={date} dateHandler={dateHandler} />
            ) : (
              ""
            )}
            {dateSelector === "Flexible" ? (
              <FlexibleDateSelector date={date} setDate={setDate} />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkin;
