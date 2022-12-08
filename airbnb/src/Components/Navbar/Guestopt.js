import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

const Guestopt = ({ hoverItem, setActiveSelect, leavehover, activeSelect }) => {
  const guests = [
    {
      type: "Adult",
      des: "Age 13 or above",
    },
    {
      type: "Children",
      des: "Age 2-12",
    },
    {
      type: "Infants",
      des: "Under 2",
    },
    {
      type: "Pets",
      des: "Bringing a service animail?",
    },
  ];
  const [guestNum, setGuestnum] = useState(0);
  if (guestNum < 0) {
    setGuestnum(0);
  }
  return (
    <div
      className="opt guest"
      onMouseOver={hoverItem}
      onClick={() => setActiveSelect("guest")}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "guest" ? "white" : ""}`,
      }}
    >
      Who
      <span>Add guests</span>
      <BiSearch className="searchIcon" />
      <div
        className="loactionOpts"
        style={{
          display: `${activeSelect === "guest" ? "flex" : "none"}`,
        }}
      >
        {guests.map((items, x) => (
          <div className="gueststabs" key={x}>
            <div className="guestType">
              <span className="guestType-heading">{items.type}</span>
              <span>{items.des}</span>
            </div>
            <div className="guestCount">
              <RiSubtractFill
                className="subsguest guestnum"
                onClick={() => setGuestnum(guestNum - 1)}
              />
              {guestNum}
              <RiAddFill
                className="addsguest guestnum"
                onClick={() => setGuestnum(guestNum + 1)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestopt;
