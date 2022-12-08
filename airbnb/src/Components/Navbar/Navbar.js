import React, { useState } from "react";
import "./Navbar.css";
import { SiAirbnb } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

import { BiGlobe, BiSearch } from "react-icons/bi";
import ExpandableFilters from "./ExpandableFilters";

const Navbar = () => {
  const [actions, setActions] = useState(false);
  const [filters, setFilters] = useState();
  // window.moused(() => {
  //   setFilters((filters = false));
  // });

  return (
    <div className="nav-container">
      <div className="nav-items">
        <div className="logo-box">
          <SiAirbnb className="logo-icon" /> airbnb
        </div>
        {!filters ? (
          <div
            className="serach-box"
            onClick={(e) => {
              setFilters(!filters);
            }}
          >
            <div className="search-filters">
              <span>Anywhere</span>
              <span>Anytime</span>
              <span>
                Add guests
                <BiSearch className="search-icon" />
              </span>
            </div>
          </div>
        ) : (
          <div className="expandedFilters">
            <ExpandableFilters />
          </div>
        )}
        <div className="profilebox">
          <div className="profiletext">Airbnb your home</div>
          <div className="profiletext globeIcon">
            <BiGlobe />
          </div>
          <div
            className="profileiconsmenu"
            onClick={() => {
              setActions(!actions);
            }}
          >
            <AiOutlineMenu />
            <FaUserCircle className="userIcon" />
          </div>
          <div
            className="userActions"
            style={{ display: `${actions ? "block" : "none"}` }}
          >
            <li>Sign up</li>
            <li>Log in</li>
            <hr />
            <li>Airbnb your home </li>
            <li>Host an experience</li>
            <li>Help</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
