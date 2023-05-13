import { setDate } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import Calender from "./Calender";

const Checkin = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  date,
  dateHandler,
  startDate,
  calenderHandler,
  calender,
  selectedOpt,
}) => {
  const [checkDate, setCheckDate] = useState();
  // useEffect(() => {
  //   startDate !== "choose date" ? setCheckDate(startDate.toDateString()) : "";
  // });
  return (
    <div
      className="expandabletab checkin"
      onClick={(e) => {
        selectedOpt("checkin");
        calenderHandler();
      }}
      onMouseOver={hoverItem}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "checkin" ? "white" : ""}`,
      }}
    >
      Check in
      <span>{startDate ? startDate : "Choose date"}</span>
      {startDate ? (
        <RiCloseFill
          color="red"
          onClick={() => {
            dateHandler("StartDate", null);
          }}
        />
      ) : (
        ""
      )}
      {activeSelect === "checkin" || activeSelect === "checkout" ? (
        <div
          className="loactionOpts"
          style={{
            display: "flex",
          }}
        >
          <div className="dateOpt">
            <div className="dateOpt-nav">Choose dates</div>
            <div className="dateOpt-nav">I am felxible</div>
          </div>
          <div className="twinCalender">
            <Calender />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkin;
