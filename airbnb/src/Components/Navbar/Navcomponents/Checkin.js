import { setDate } from "date-fns";
import React, { useState } from "react";
import { useEffect } from "react";
import { RiCloseFill } from "react-icons/ri";
import Calender from "./Calender";

const Checkin = ({
  hoverItem,
  leavehover,
  activeSelect,
  date,
  dateHandler,
  startDate,
  calenderHandler,
  selectedOpt,
  setDate,
}) => {
  const [checkDate, setCheckDate] = useState();
  console.log(startDate);

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
        onClick={(e) => {
          selectedOpt("checkin");
          calenderHandler();
        }}
        className="expandabletabselect"
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
      </div>
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
            <Calender date={date} dateHandler={dateHandler} setDate={setDate} />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkin;
