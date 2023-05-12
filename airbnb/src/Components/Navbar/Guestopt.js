import React, { useEffect } from "react";
import { useState } from "react";
// import { BiSearch } from "react-icons/bi";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

// import Increasingnumber from "./Increasingnumber";

const Guestopt = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  hideExpandable,
}) => {
  // Declare an array of guests with their details
  const [guests, setGuests] = useState([
    {
      type: "Adult",
      des: "Age 13 or above",
      value: 0,
    },
    {
      type: "Children",
      des: "Age 2-12",
      value: 0,
    },
    {
      type: "Infants",
      des: "Under 2",
      value: 0,
    },
    {
      type: "Pets",
      des: <a>Bringing the pets</a>,
      value: 0,
    },
  ]);

  const [total, setTotal] = useState(0);

  const handleChange = (index, change) => {
    const updatedGuests = [...guests];
    updatedGuests[index].value += change;
    if (updatedGuests[index].value < 0) {
      return (updatedGuests[index].value = 0);
    }

    setGuests(updatedGuests);

    const newTotal = updatedGuests.reduce(
      (total, guest) => total + guest.value,
      0
    );
    setTotal(newTotal);
  };

  return (
    <div
      className="opt guests"
      onClick={() => {
        setActiveSelect("guests");
      }}
      onMouseOver={hoverItem}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "guests" ? "white" : ""}`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="titleGuests" style={{ display: "grid", gap: "10px" }}>
          Guests
          <span>
            {total} {"Guests"}
          </span>
        </div>
      </div>

      <div
        className="loactionOpts"
        style={{
          display: `${activeSelect === "guests" ? "flex" : "none"}`,
        }}
      >
        {guests.map((guest, index) => (
          <div key={index} className="gueststabs">
            <div className="guestType">
              <div className="guestType">{guest.type}</div>
              <div>{guest.des}</div>
            </div>
            <div className="guestCount">
              <button
                onClick={() => handleChange(index, -1)}
                className="chngBtn"
              >
                <RiSubtractFill className="subsguest guestnum" />
              </button>
              {guest.value}
              <button
                onClick={() => handleChange(index, 1)}
                className="chngBtn"
              >
                <RiAddFill className="addsguest guestnum " />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestopt;
