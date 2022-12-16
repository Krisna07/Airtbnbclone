import React from "react";
import axios from "axios";
import "./Thumbnail.css";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";

const Thumbnail = () => {
  const API_KEY = "key_f0e9b1bbdbf67fe0d74967a50a78bdfe";
  const getListings = async () => {
    const response = await axios.get(
      "https://api.domain.com.au/v1/listings/residential/_search",
      {
        params: {
          apiKey: API_KEY,
          includeFields:
            "mainPhotoUrl,price,displayableAddress,bedrooms,description",
        },
      }
    );
    const listings = response.data.listings;
    return listings;
  };

  getListings().then((listings) => {
    console.log(listings);
  });
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
