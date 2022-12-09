import { setDate } from "date-fns";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import Calender from "./Calender";

const Checkin = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  date,
  setDate,
  startDate,
}) => {
  const [showItems, setShow] = useState();
  return (
    <div
      className="opt checkin"
      onClick={() => {
        setActiveSelect("checkin");
        setShow(!showItems);
      }}
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
        <div style={{ display: "grid", gap: "10px" }}>
          Check in
          <span>{startDate}</span>
        </div>
      </div>

      <div
        className="loactionOpts"
        style={{
          display: `${
            (activeSelect === "checkin" && showItems) ||
            (activeSelect === "checkout" && showItems)
              ? "flex"
              : "none"
          }`,
        }}
      >
        <div className="dateOpt">
          <div className="dateOpt-nav">Choose dates</div>
          <div className="dateOpt-nav">I am felxible</div>
        </div>
        <div className="twinCalender">
          <Calender date={date} setDate={setDate} />
        </div>
      </div>
    </div>
  );
};

export default Checkin;
