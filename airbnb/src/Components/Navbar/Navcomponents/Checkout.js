import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

export const Checkout = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  date,
  dateHandler,
  endDate,
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
        <div style={{ display: "grid", gap: "10px" }}>
          Check out
          <span>{endDate ? endDate : "Choose date"}</span>
        </div>
        {endDate ? (
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
