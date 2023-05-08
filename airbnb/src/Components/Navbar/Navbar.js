import React, { useState } from "react";
import "./Navbar.css";
import { SiAirbnb } from "react-icons/si";
import { AiOutlineMenu } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";

import { BiFilter, BiGlobe, BiSearch } from "react-icons/bi";
import ExpandableFilters from "./ExpandableFilters";
import Features from "./Features";
import { useRef } from "react";
import { useEffect } from "react";
import { RiFilter3Line } from "react-icons/ri";

const Navbar = ({ updateFeatures, updateProperty }) => {
  const [actions, setActions] = useState(false);
  const [filters, setFilters] = useState();
  const hideExpandable = () => {
    setFilters(filters);
  };
  const [moreIcons, setMoreIcons] = useState(0);
  const [fwidth, setFwidth] = useState(0);
  const moveRight = (action) => {
    action == "add"
      ? setMoreIcons(moreIcons + 200)
      : setMoreIcons(moreIcons - 200);
  };
  const featuresref = useRef(0);
  useEffect(() => {
    const features = featuresref.current;
    setFwidth(features.getBoundingClientRect().width);
  }, []);

  return (
    <div className="nav-container" onScroll={hideExpandable}>
      <div className="nav-items">
        <div className="logo-box">
          <SiAirbnb className="logo-icon" onClick={() => updateProperty("")} />{" "}
          airbnb
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
      <div className="features">
        <div className="features-box">
          <div
            className="featuresWrapper"
            style={{ right: `${moreIcons}px` }}
            ref={featuresref}
          >
            <Features updateFeatures={updateFeatures} />
          </div>
        </div>
        <div className="slider">
          {moreIcons != 0 ? (
            <div className="slideEdge left">
              <FaChevronLeft
                className="sliderIcon "
                onClick={() => moveRight("")}
              />
            </div>
          ) : (
            ""
          )}
          {moreIcons < fwidth ? (
            <div className="slideEdge right">
              <FaChevronRight
                className="sliderIcon "
                style={{ right: "-50%" }}
                onClick={() => moveRight("add")}
              />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="filterBtn">
          <RiFilter3Line /> Filter
        </div>
      </div>
    </div>
  );
};

export default Navbar;
