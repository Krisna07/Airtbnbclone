import React from "react";
import "./Thumbnail.css";

const Thumbnail = () => {
  const thumbnails = [
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
    },
  ];
  return (
    <div className="thumbnailsbody">
      <div className="imageconatiner"></div>
      <div className="thumbDes">
        <div className="thumbtitle">East Gosford, Australia</div>
        <div className="thumbBeds">3 beds</div>
        <div className="thumbprice">$330 AUD </div>
      </div>
    </div>
  );
};

export default Thumbnail;
