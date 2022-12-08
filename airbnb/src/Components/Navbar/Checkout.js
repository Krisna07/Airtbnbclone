import React from "react";
import { RiCloseFill } from "react-icons/ri";

export const Checkout = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
  date,
  setDate,
  endDate,
}) => {
  return (
    <div
      className="opt checkout"
      onMouseOver={hoverItem}
      onClick={() => setActiveSelect("checkout")}
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
          <span>{endDate}</span>
        </div>
        {date[0].startDate && activeSelect === "checkout" ? (
          <span className="removeStart remove-date">
            <RiCloseFill color="red" />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
