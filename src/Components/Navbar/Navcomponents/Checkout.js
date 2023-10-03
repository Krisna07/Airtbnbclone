import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export const Checkout = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  date,
  dateHandler,

  calenderHandler,
  calender,
  selectedOpt,
}) => {
  return (
    <div
      className="expandabletab checkout"
      onMouseOver={hoverItem}
      onClick={(e) => {
        selectedOpt("checkout");
        if (!calender) {
          calenderHandler();
        }
        calenderHandler();
      }}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "checkout" ? "white" : ""}`,
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
        <div className="expandabletabselect">
          Check out
          <span>
            {date.endDate ? date.endDate.toLocaleDateString() : "Choose date"}
          </span>
        </div>
        {date.endDate ? (
          <span className="removeStart remove-date">
            <RiCloseFill
              color="red"
              onClick={() => dateHandler("endDate", null)}
            />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
