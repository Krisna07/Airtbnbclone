import React, { useEffect } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

// import Increasingnumber from "./Increasingnumber";

const Guestopt = ({ hoverItem, setActiveSelect, leavehover, activeSelect }) => {
  const [value, setValue] = useState({
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });
  // const handleChange = (e) => {
  //   setValue({
  //     ...value,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const guests = [
    {
      type: "Adult",
      des: "Age 13 or above",
      value: value.adult,
    },
    {
      type: "Children",
      des: "Age 2-12",
      value: value.children,
    },
    {
      type: "Infants",
      des: "Under 2",
      value: value.infants,
    },
    {
      type: "Pets",
      des: "Bringing a service animail?",
      value: value.pets,
    },
  ];
  //   const totalvalue =
  //     guests[1].value + guests[2].value + guests[3].value + guests[4];

  //   console.log(totalvalue);
  // console.log(guests[1].value);

  // const allValues = document.querySelectorAll(".thisValue");

  // // setValue({
  // //   ...value,
  // //   adult: allValues[0].innerHTML,
  // // });
  // console.log(value);
  const handlechange = (e) => {
    console.log(e);
  };
  const [showItems, setShow] = useState();
  return (
    <div
      className="opt guest"
      onMouseOver={hoverItem}
      onClick={() => {
        setActiveSelect("guest");
        setShow(!showItems);
      }}
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
          display: `${activeSelect === "guest" && showItems ? "flex" : "none"}`,
        }}
      >
        {guests.map((items, x) => {
          let count = 0;
          items.value = count;
          console.log(count);
          return (
            <div className="gueststabs">
              <div className="guestType">
                <span className="guestType-heading">{items.type}</span>
                <span>{items.des}</span>
              </div>
              <div className="guestCount">
                <RiSubtractFill className="subsguest guestnum" />
                <input
                  contentEditable="false"
                  value={items.value}
                  name={items.type}
                  style={{
                    outline: "none",
                    border: "none",
                    width: "1ch",
                    maxWidth: "2ch",
                  }}
                />
                <RiAddFill
                  className="addsguest guestnum addAdults"
                  onClick={handlechange}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Guestopt;
