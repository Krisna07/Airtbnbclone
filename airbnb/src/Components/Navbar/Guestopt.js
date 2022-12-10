import React, { useEffect } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

// import Increasingnumber from "./Increasingnumber";

const Guestopt = ({ hoverItem, setActiveSelect, leavehover, activeSelect }) => {
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
      des: "Bringing a service animail?",
      value: 0,
    },
  ]);

  // Declare a state variable to store the total value
  const [total, setTotal] = useState(0);

  // Declare a state variable to control whether the list of guests is visible
  const [showItems, setShow] = useState(false);

  // Declare a function to handle changes to the value of a guest
  const handleChange = (index, change) => {
    // Create a new array of guests with the updated value
    const updatedGuests = [...guests];
    updatedGuests[index].value += change;

    // Set the new array of guests as the value of the guests state variable
    setGuests(updatedGuests);

    // Calculate the new total value and update the state variable
    const newTotal = updatedGuests.reduce(
      (total, guest) => total + guest.value,
      0
    );
    setTotal(newTotal);
  };

  return (
    <div>
      {/* Use the map() function to render the array of guests */}
      {guests.map((guest, index) => (
        <div key={index} className="gueststabs">
          <div className="guestType">
            <div className="guestType">{guest.type}</div>
            <div>{guest.des}</div>
          </div>
          <div className="guestCount">
            {/* Provide buttons to increase or decrease the value of the guest */}
            <button onClick={() => handleChange(index, -1)}>
              <RiSubtractFill className="subsguest guestnum" />
            </button>
            {guest.value}
            <button onClick={() => handleChange(index, 1)}>
              <RiAddFill className="addsguest guestnum " />
            </button>
          </div>
        </div>
      ))}

      {/* Display the total value */}
      <div>Total: {total}</div>
    </div>
  );
};

export default Guestopt;
