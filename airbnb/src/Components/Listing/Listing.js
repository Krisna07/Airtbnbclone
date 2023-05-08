import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

import { FaDotCircle } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

import { MdOutlineIosShare, MdPolicy } from "react-icons/md";
import "./listing.css";
export default function Listing({ property, updateProperty }) {
  console.log(property);
  return (
    <div className="listingPage">
      {/* <div className="propertyNav">
        <FaAirbnb />
        <MdClose onClick={() => updateProperty("")} />
      </div> */}
      <div className="lisitingType">
        <div className="title">{property.property_type}</div>
        <div className="lochostDetails">
          <div className="locHost">
            <span className="policy">
              <MdPolicy /> {property.cancellation_policy}
            </span>
            <span className="location">
              <FaDotCircle /> {property.host_location}
            </span>
          </div>
          <div className="shareSave">
            <span>
              <MdOutlineIosShare /> Share
            </span>
            <span>
              <AiOutlineHeart />
              Save
            </span>
          </div>
        </div>
      </div>
      <div className="listingImage">
        <img src={property.xl_picture_url} alt="propertyImage" width={"100%"} />
        <div className="showAll">
          <TbGridDots /> Show all photos
        </div>
      </div>
      <div className="lisitingDescriptions">
        <div className="propertyTitleCon">
          <div className="listingtitle">{property.name}</div>
          <div className="propertySpecs">
            <span>{property.guests_included} guests</span>
            <span>{property.bedrooms} bedrooms</span>
            <span>{property.beds} beds</span>
            <span>{property.bathrooms} baths</span>
          </div>
        </div>
        <div className="descontainer">{property.description}</div>
      </div>
    </div>
  );
}
