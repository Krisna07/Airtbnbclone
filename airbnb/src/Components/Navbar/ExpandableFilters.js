import React, { useState } from "react";

import Locationstab from "./Locationstab";
import Checkin from "./Checkin";
import { Checkout } from "./Checkout";
import Guestopt from "./Guestopt";

const ExpandableFilters = ({}) => {
  const [activenav, setActivenav] = useState("Stays");
  let startDate;
  let endDate;
  const [date, setDate] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const [hoverEl, setHoverEl] = useState("");
  const [activeSelect, setActiveSelect] = useState("location");
  const expandablemenu = ["Stays", "Experiences", "Online Experiences"];
  const selectMenu = (e) => {
    setActivenav(e.target.innerHTML);
  };
  const selectedOpt = (e) => {
    setActiveSelect(e.target.classList[1]);
  };
  const hoverItem = (e) => {
    setHoverEl(e.target.classList[1]);
  };
  const leavehover = () => {
    setHoverEl("");
  };
  //setting up dates for calender
  startDate = date[0].startDate
    ? date[0].startDate.toDateString()
    : "Choose date";
  endDate = date[0].endDate ? date[0].endDate.toDateString() : "Choose date";

  return (
    <div className="expandable-container">
      <div className="expandablenav">
        {expandablemenu.map((menus, x) => (
          <div
            key={x}
            onClick={selectMenu}
            className="menus"
            style={{
              borderColor: `${menus === activenav ? "gray" : ""}`,
              color: `${menus === activenav ? "black" : ""}`,
            }}
          >
            {menus}
          </div>
        ))}
      </div>
      <div className="expandablenavOptions">
        <div
          className="opt location"
          onMouseOver={hoverItem}
          onClick={() => {
            setActiveSelect("location");
            setShow(!showItems);
          }}
          onMouseLeave={leavehover}
          style={{
            backgroundColor: `${activeSelect === "location" ? "white" : ""}`,
          }}
        >
          <Locationstab
          // hoverItem={hoverItem}
          // setActiveSelect={setActiveSelect}
          // leavehover={leavehover}
          // activeSelect={activeSelect}
          />
        </div>
        <span
          className="border"
          style={{
            display: `${
              hoverEl === "location" ||
              hoverEl === "checkin" ||
              activeSelect === "location" ||
              activeSelect === "checkin"
                ? "none"
                : ""
            }`,
          }}
        ></span>

        <Checkin
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
          date={date}
          setDate={setDate}
          startDate={startDate}
        />
        <span
          className="border"
          style={{
            display: `${
              hoverEl === "checkin" ||
              hoverEl === "checkout" ||
              activeSelect === "checkout" ||
              activeSelect === "checkin"
                ? "none"
                : ""
            }`,
          }}
        ></span>

        <Checkout
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
          date={date}
          setDate={setDate}
          endDate={endDate}
        />
        <span
          className="border"
          style={{
            display: `${
              hoverEl === "checkout" ||
              hoverEl === "guest" ||
              activeSelect === "checkout" ||
              activeSelect === "guest"
                ? "none"
                : ""
            }`,
          }}
        ></span>

        <Guestopt
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
        />
      </div>
    </div>
  );
};

export default ExpandableFilters;
