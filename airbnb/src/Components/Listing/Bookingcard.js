import { React } from "react";
import Button from "../Button/Button";

export default function BookingCard({ price }) {
  return (
    <div className="bookingcard">
      <div className="priceContainer">
        <span className="totalPrice">
          ${(price * 7).toLocaleString("en-us")} AUD
        </span>{" "}
        total
      </div>
      <div className="dateContainerGuest">
        <div className="dateContainer">
          <div className="checkinCotainer">
            <span>CHECKIN</span>
            <input type="date" />
          </div>
          <div className="checkoutContainer">
            <span>CHECKOUT</span>
            <input type="date" />
          </div>
        </div>
        <div className="guestContainer">
          <div className="checkoutContainer">
            <span>GUESTS</span>
            <input type="date" />
          </div>
        </div>
      </div>
      <Button children={"Change Bookings"} />
    </div>
  );
}
