import React from "react";

import { AiOutlineHeart } from "react-icons/ai";

import { FaDotCircle, FaPlane, FaSprayCan } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

import { MdOutlineIosShare, MdPolicy } from "react-icons/md";
import "./listing.css";
import { GiChefToque } from "react-icons/gi";
import Button from "../Button/Button";
import Listingcomp from "./listingcomp";
export default function Listing({ property, updateProperty }) {
  console.log(property);

  const amenities = property.amenities.split(",");

  return (
    <div className="listingPage">
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
          <Button icon={<TbGridDots />} children={"Show all photos"} />
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
        <div className="hostDetils">
          <span style={{ fontStyle: "italic" }}>
            {property.property_type} by{" "}
          </span>
          <span style={{ fontWeight: "600" }}>{property.host_name}</span>
        </div>
        <Listingcomp
          listingHeadings={"What this place offers"}
          items={amenities.splice(0, 10)}
          btnChildren={`Show all ${
            property.amenities.split(",").length
          } amenities`}
        />
        {/* <div className="amenities">
          <h2>What this place offers</h2>
          <div className="amenitieslist">
            {property.amenities
              .split(",")
              .slice(0, 10)
              .map((items, x) => (
                <span key={x}>{items}</span>
              ))}
          </div>
          <Button
            children={`Show all ${
              property.amenities.split(",").length
            } amenities`}
          />
        </div> */}
        <Listingcomp
          listingHeadings={"Add on service"}
          items={[` Chef`, ` Cleaning`, ` Airport transfer`]}
          btnChildren={`Message a trip desinger`}
        />
      </div>
    </div>
  );
}
