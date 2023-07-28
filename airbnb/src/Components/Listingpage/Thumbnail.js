import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Thumbnail.css";
import { FaAirbnb, FaBed, FaSearch, FaStar } from "react-icons/fa";

const Thumbnail = ({ listing, updateProperty }) => {
  return (
    <div className="thumbnailContainer">
      {listing.length > 0 ? (
        listing.map((property, x) => {
          return (
            <div
              className="thumbnailsbody"
              key={property.fields.id}
              onClick={() => updateProperty(property.fields)}>
              <div className="imageconatiner">
                <img
                  src={`${property.fields.medium_url}`}
                  alt=""
                  width={"100%"}
                />
                <div>
                  <svg
                    className="favIcon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 22.5l-9.75-9c-2.484-2.332-2.484-6.117 0-8.45s6.516-2.332 9-0.001c2.484-2.33 6.516-2.33 9 0 2.484 2.333 2.484 6.118 0 8.45l-9 8.5z"
                      stroke="#fff"
                      stroke-width="1.5"
                      fill="rgba(0, 0, 0, 0.5)"
                    />
                  </svg>
                </div>
                <div className="imagebookContainer">
                  <div className="hostImage">
                    {" "}
                    <hr className="line" />
                    <img
                      src={`${
                        property.fields.host_picture_url
                          ? property.fields.host_picture_url
                          : property.fields.host_thumbnail_url
                      }`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="thumbDes">
                <div className="thumbtitle">
                  {property.fields.city}, {property.fields.country}
                </div>
                <div className="thumbtype">{property.fields.property_type}</div>
                <div className="thumbBeds">
                  {property.fields.beds}
                  <FaBed />
                </div>
                <div className="thumbprice">
                  <span>${property.fields.price * 5} AUD</span>/
                  <span>per week</span>
                </div>
                <div className="star-rental">
                  <FaStar />{" "}
                  {property.fields.review_scores_rating
                    ? property.fields.review_scores_rating / 20
                    : 0}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="loadingStatus">
          {" "}
          <div className="nolisitingpage">
            <FaAirbnb className="airIcon" />
            <div className="circleRound">
              <div className="red"></div>
            </div>
          </div>
          <div>
            <FaSearch /> No listing found
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnail;
