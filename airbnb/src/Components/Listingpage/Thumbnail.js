import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Thumbnail.css";
import {
  FaBed,
  FaBuilding,
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { image } from "rangen";

const Thumbnail = () => {
  const [users, setUsers] = useState([]);
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=30"
        );
        setUsers(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const [listing, setListing] = useState([]);
  useEffect(() => {
    const fetchpropertyDetails = async () => {
      try {
        const respoonse = await axios.get(
          "https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=60&start=0&facet=city&facet=country&facet=property_type&facet=room_type&facet=bed_type&facet=amenities&facet=availability_365&facet=cancellation_policy&facet=features&facet=host_location&facet=host_picture_url&facet=picture_url&refine.country=Australia"
        );
        setListing(respoonse.data.records);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpropertyDetails();
    console.log(listing);
  }, []);
  console.log(listing);
  // useEffect(() => {
  //   const fetchProperty = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://randomuser.me/api/?results=30"
  //       );
  //       setUsers(response.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchProperty();
  // }, []);

  useEffect(() => {
    if (users.length > 0) {
      const newThumbnails = users.map((user) => {
        return {
          location: `${user.location.city}, ${user.location.country}`,
          beds: `${Math.floor(Math.random() * 5) + 1} beds`,
          price: `$${Math.floor(Math.random() * 400) + 100} total`,
          stared: Math.random() < 0.5,
          image: user.picture.medium,
        };
      });
      setThumbnails(newThumbnails);
    }
  }, [users]);

  return (
    <div className="thumbnailContainer">
      {listing
        ? listing.map((property, x) => {
            return (
              <div className="thumbnailsbody" key={x}>
                <div className="imageconatiner">
                  <img
                    src={`${property.fields.xl_picture_url}`}
                    alt=""
                    width={"100%"}
                  />
                  <div>
                    <svg
                      className="favIcon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22.5l-9.75-9c-2.484-2.332-2.484-6.117 0-8.45s6.516-2.332 9-0.001c2.484-2.33 6.516-2.33 9 0 2.484 2.333 2.484 6.118 0 8.45l-9 8.5z"
                        stroke="#fff"
                        stroke-width="1.5"
                        fill="#999"
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
                  <div className="thumbtitle">{property.fields.name}</div>
                  <div className="thumbtype">
                    <FaBuilding /> {property.fields.property_type}
                  </div>
                  <div className="thumbBeds">
                    {property.fields.beds}
                    <FaBed />
                  </div>
                  <div className="thumbprice">
                    <span>${property.fields.price} AUD</span>/
                    <span>per week</span>
                  </div>
                  <div className="star-rental" onClick={() => !property.stared}>
                    {property.stared ? <FaStar /> : <FaRegStar />}
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Thumbnail;
