import React, { useEffect, useRef, useState } from "react";
import "./Thumbnail.css";
import { FaAirbnb, FaBed, FaSearch, FaStar } from "react-icons/fa";
import Features from "../Navbar/Navcomponents/Features";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiFilter3Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Thumbnail = ({ listing, updateProperty, updateFeatures }) => {
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const validateImages = async () => {
      const validatedImages = await Promise.all(
        listing.map(async (property) => {
          const isValid = await isValidImageUrl(property.fields.xl_picture_url);
          return { property, isValid };
        }),
      );
      setValidImages(validatedImages);
    };

    validateImages();
  }, [listing]);

  const isValidImageUrl = async (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve(true);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = url;
    });
  };
  const listings = validImages.filter((valid) => {
    return valid.isValid;
  });
  console.log(listings);
  const [moreIcons, setMoreIcons] = useState(0);
  const [fwidth, setFwidth] = useState(0);
  const moveRight = (action) => {
    action === "add"
      ? setMoreIcons(moreIcons + 200)
      : setMoreIcons(moreIcons - 200);
  };
  const featuresref = useRef(0);
  useEffect(() => {
    const features = featuresref.current;
    setFwidth(features.getBoundingClientRect().width);
  }, []);
  return (
    <div className="thumbnailSection">
      <div className="features">
        <div className="features-box">
          <div
            className="featuresWrapper"
            style={{ right: `${moreIcons}px` }}
            ref={featuresref}>
            <Features updateFeatures={updateFeatures} />
          </div>
          <div className="slider">
            {moreIcons !== 0 ? (
              <div className="slideEdge left">
                <FaChevronLeft
                  className="sliderIcon "
                  onClick={() => moveRight("")}
                />
              </div>
            ) : (
              ""
            )}
            {moreIcons <= fwidth ? (
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
        </div>

        <div className="filterBtn">
          <RiFilter3Line /> Filter
        </div>
      </div>
      <div className="thumbnailContainer">
        {listings.length > 0 ? (
          listings.map((listItem, x) => {
            return (
              <div
                className="thumbnailsbody"
                key={listItem.property.fields.id}
                onClick={() => updateProperty(listItem.property.fields)}>
                <div className="imageconatiner">
                  <img
                    src={`${listItem.property.fields.xl_picture_url}`}
                    alt=""
                    width={"100%"}
                    className="thummbnailImage"
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
                          listItem.property.fields.host_picture_url
                            ? listItem.property.fields.host_picture_url
                            : listItem.property.fields.host_thumbnail_url
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="thumbDes">
                  <div className="thumbtitle">
                    {listItem.property.fields.city},{" "}
                    {listItem.property.fields.country}
                  </div>
                  <div className="thumbtype">
                    {listItem.property.fields.property_type}
                  </div>
                  <div className="thumbBeds">
                    {listItem.property.fields.beds}
                    <FaBed />
                  </div>
                  <div className="thumbprice">
                    <span>${listItem.property.fields.price * 5} AUD</span>/
                    <span>per week</span>
                  </div>
                  <div className="star-rental">
                    <FaStar />{" "}
                    {listItem.property.fields.review_scores_rating
                      ? listItem.property.fields.review_scores_rating / 20
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
      <button className="filterBtn">
        More Listings <AiOutlinePlusCircle />
      </button>
    </div>
  );
};

export default Thumbnail;
