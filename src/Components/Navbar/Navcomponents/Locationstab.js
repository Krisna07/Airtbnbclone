import React from "react";
import { useState } from "react";


const Locationstab = ({ activeSelect, FilterItemsHandler }) => {

  const mapItems = [
    {
      title: "I,m flexible",
      imgsrc:'./Images/WD.jpg'
        ,
    },
    {
      title: "Europe",
      imgsrc:"/Images/EU.webp",
    },
    {
      title: "New Zealand",
      imgsrc:
        "/Images/NZ.webp",
    },
    {
      title: "Asia Islands",
      imgsrc:
        "/Images/IL.webp",
    },
    {
      title: "United Kingdom",
      imgsrc:
        "/Images/UK.webp",
    },
    {
      title: "United States",
      imgsrc:
        "/Images/US.webp",
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
