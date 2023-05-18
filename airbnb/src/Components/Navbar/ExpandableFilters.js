import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import Checkin from "./Navcomponents/Checkin";
import { Checkout } from "./Navcomponents/Checkout";
import Guestopt from "./Navcomponents/Guestopt";
import Locationstab from "./Navcomponents/Locationstab";
import "./Expandable.css";

const ExpandableFilters = ({}) => {
  const [activenav, setActivenav] = useState("Stays");

  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  });

  const [activeSelect, setActiveSelect] = useState("location");
  const expandablemenu = ["Stays", "Experiences", "Online Experiences"];
  const selectMenu = (e) => {
    setActivenav(e.target.innerHTML);
  };

  const selectedOpt = (item) => {
    setActiveSelect(item);
    if (item === activeSelect) {
      setActiveSelect("");
    }
  };

  const dateHandler = (key, value) => {
    setDate((items) => {
      return {
        ...items,
        [key]: value,
      };
    });
  };
  const [calender, setCalender] = useState(false);
  const [showItems, setShow] = useState();
  const [filteritems, setFilterItems] = useState({
    location: "Search destination",
    checkin: "Add dates",
    checkout: "Add dates",
    guests: "Add guests",
  });
  const calenderHandler = () => {
    setCalender(!calender);
  };
  const FilterItemsHandler = (key, value) => {
    setFilterItems((prevItems) => {
      return {
        ...prevItems,
        [key]: value,
      };
    });
  };

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
          style={{
            backgroundColor: `${activeSelect == "location" ? "white" : ""}`,
          }}
        >
          <div
            className="expandabletabselect"
            onClick={() => {
              selectedOpt("location");
              setShow(!showItems);
            }}
          >
            Where
            <span>{filteritems.location}</span>
          </div>
          {activeSelect === "location" ? (
            <Locationstab FilterItemsHandler={FilterItemsHandler} />
          ) : (
            ""
          )}
        </div>

        <Checkin
          setActiveSelect={setActiveSelect}
          activeSelect={activeSelect}
          date={date}
          dateHandler={dateHandler}
          setDate={setDate}
          calenderHandler={calenderHandler}
          calender={calender}
          selectedOpt={selectedOpt}
        />
        <Checkout
          activeSelect={activeSelect}
          date={date}
          dateHandler={dateHandler}
          calenderHandler={calenderHandler}
          calender={calender}
          selectedOpt={selectedOpt}
        />
        <div
          className="expandabletab guests"
          onClick={() => {
            selectedOpt("guests");
          }}
          style={{
            backgroundColor: `${activeSelect === "guests" ? "white" : ""}`,
          }}
        >
          <Guestopt selectedOpt={selectedOpt} activeSelect={activeSelect} />
        </div>
      </div>
      <button className="searchIcon">
        <BiSearch />
        {showItems ? "Search" : ""}
      </button>
    </div>
  );
};

export default ExpandableFilters;
