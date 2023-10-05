import React from "react";
import { useState } from "react";

import WDImage from "../../../assets/WD.jpg"; 
import EUImage from "../../../assets/EU.webp"; 
import NZImage from "../../../assets/NZ.webp"; 
import ILImage from "../../../assets/IL.webp"; 
import UKImage from "../../../assets/UK.webp"; 
import USImage from "../../../assets/USA.webp";

const Locationstab = ({ FilterItemsHandler }) => {
  const mapItems = [
    {
      title: "I'm flexible",
      imgsrc: WDImage,
    },
    {
      title: "Europe",
      imgsrc: EUImage,
    },
    {
      title: "New Zealand",
      imgsrc: NZImage,
    },
    {
      title: "Asia Islands",
      imgsrc: ILImage,
    },
    {
      title: "United Kingdom",
      imgsrc: UKImage,
    },
    {
      title: "United States",
      imgsrc: USImage,
    },
  ];


 
  return (
    <div className="loactionOpts">
      <div className="opttitle">
        <h2>Search by region</h2>
      </div>
      <div className="mapItems">
        {mapItems.map((items, x) => (
          <div
            className="map-box"
            key={x}
            onClick={() => FilterItemsHandler("location", items.title)}
          >
            <div className="img-container">
              <img src={items.imgsrc} alt={items.title} />
            </div>
            <span style={{ color: "black" }}>{items.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locationstab;
