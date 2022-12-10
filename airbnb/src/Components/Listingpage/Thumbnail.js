import React from "react";
import "./Thumbnail.css";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

const Thumbnail = () => {
  const thumbnails = [
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
    {
      location: "East Gosford, Australia",
      beds: "3 beds",
      price: "$330 AUD total",
      stared: false,
    },
  ];
  return (
    <div className="thumbnailContainer">
      {thumbnails.map((property, x) => {
        return (
          <div className="thumbnailsbody" key={x}>
            <div className="imageconatiner">
              <div>
                <FaRegHeart className="fav-icon" />
              </div>
            </div>
            <div className="thumbDes">
              <div className="thumbtitle">{property.location}</div>
              <div className="thumbBeds">{property.beds}</div>
              <div className="thumbprice">{property.price} </div>
              <div className="star-rental" onClick={() => !property.stared}>
                {property.stared ? <FaStar /> : <FaRegStar />}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Thumbnail;
