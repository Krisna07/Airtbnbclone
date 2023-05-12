import React, { useState } from "react";

import Locationstab from "./Locationstab";
import Checkin from "./Checkin";
import { Checkout } from "./Checkout";
import Guestopt from "./Guestopt";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

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
  const [showItems, setShow] = useState();
  const [filteritems, setFilterItems] = useState({
    location: "Search destination",
    checkin: "Add dates",
    checkout: "Add dates",
    guests: "Add guests",
  });

  const FilterItemsHandler = (key, value) => {
    setFilterItems((prevItems) => {
      return {
        ...prevItems,
        [key]: value,
      };
    });
  };
  const tabs = [];
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
          className="expandabletab"
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
          Where
          <span>{filteritems.location}</span>
          {activeSelect === "location" && showItems ? (
            <Locationstab FilterItemsHandler={FilterItemsHandler} />
          ) : (
            ""
          )}
        </div>
        <div
          className="expandabletab"
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
          Where
          <span>{filteritems.location}</span>
          {activeSelect === "location" && showItems ? (
            <Locationstab FilterItemsHandler={FilterItemsHandler} />
          ) : (
            ""
          )}
        </div>{" "}
        <div
          className="expandabletab"
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
          Where
          <span>{filteritems.location}</span>
          {activeSelect === "location" && showItems ? (
            <Locationstab FilterItemsHandler={FilterItemsHandler} />
          ) : (
            ""
          )}
        </div>{" "}
        <div
          className="expandabletab"
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
          Where
          <span>{filteritems.location}</span>
          {activeSelect === "location" && showItems ? (
            <Locationstab FilterItemsHandler={FilterItemsHandler} />
          ) : (
            ""
          )}
        </div>
        {/* <Checkin
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
          date={date}
          setDate={setDate}
          startDate={startDate}
        />

        <Checkout
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
          date={date}
          setDate={setDate}
          endDate={endDate}
        />

        <Guestopt
          hoverItem={hoverItem}
          setActiveSelect={setActiveSelect}
          leavehover={leavehover}
          activeSelect={activeSelect}
        />
      </div>{" "}
      <button className="searchIcon">
        <BiSearch />
        {showItems ? "Search" : ""}
      </button> */}
      </div>
    </div>
  );
};

export default ExpandableFilters;
