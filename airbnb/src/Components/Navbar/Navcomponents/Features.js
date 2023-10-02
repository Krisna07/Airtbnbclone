import React from "react";
import {
  GiBlockHouse,
  GiCampCookingPot,
  GiCampingTent,
  GiCastle,
  GiFamilyHouse,
  GiFlowerPot,
  GiHut,
  GiIgloo,
  GiSandCastle,
  GiStalactites,
  GiTreehouse,
  GiWoodCabin,
} from "react-icons/gi";
import { RiBuilding2Line, RiHotelLine } from "react-icons/ri";

import {
  FaBed,
  FaCaravan,
  FaHotel,
  FaSchool,
  FaSearchLocation,
  FaShip,
} from "react-icons/fa";
import {
  BiBuildingHouse,
  BiBus,
  BiDotsHorizontal,
  BiHotel,
  BiTrain,
} from "react-icons/bi";
import { MdCabin } from "react-icons/md";
import { useState } from "react";
import { SiBasecamp } from "react-icons/si";

const Features = ({ updateFeatures }) => {
  const features = [
    { title: "Apartment", icon: <BiBuildingHouse /> },
    { title: "House", icon: <GiFamilyHouse /> },
    { title: "Townhouse", icon: <GiBlockHouse /> },
    { title: "Bed & Breakfast", icon: <GiCampCookingPot /> },
    { title: "Other", icon: <BiDotsHorizontal /> },
    { title: "Villa", icon: <FaSearchLocation /> },
    { title: "Cabin", icon: <GiWoodCabin /> },
    { title: "Bungalow", icon: <BiHotel /> },
    { title: "Guesthouse", icon: <RiHotelLine /> },
    { title: "Loft", icon: <RiBuilding2Line /> },
    { title: "Dorm", icon: <FaSchool /> },
    { title: "Condominium", icon: <GiFlowerPot /> },
    { title: "Camper/RV", icon: <BiBus /> },
    { title: "Hostel", icon: <FaBed /> },
    { title: "Boat", icon: <FaShip /> },
    { title: "Serviced apartment", icon: <RiBuilding2Line /> },
    { title: "Tent", icon: <GiCampCookingPot /> },
    { title: "Treehouse", icon: <GiTreehouse /> },
    { title: "Boutique hotel", icon: <FaHotel /> },
    { title: "Chalet", icon: <MdCabin /> },
    { title: "Earth House", icon: <GiStalactites /> },
    { title: "Yurt", icon: <SiBasecamp /> },
    { title: "Hut", icon: <GiHut /> },
    { title: "Timeshare", icon: <GiSandCastle /> },
    { title: "Castle", icon: <GiCastle /> },
    { title: "Tipi", icon: <GiCampingTent /> },
    { title: "Nature lodge", icon: <FaHotel /> },
    { title: "Train", icon: <BiTrain /> },
    { title: "Igloo", icon: <GiIgloo /> },
    { title: "Van", icon: <FaCaravan /> },
  ];
  const [active, setActive] = useState("Apartment");
  return (
    <>
      {features.map((items, x) => (
        <div
          className={`featureContainer ${
            active === items.title ? "activeFeature" : ""
          }`}
          key={x}
          onClick={() => {
            updateFeatures(items.title);
            setActive(items.title);
          }}>
          <div className="featureIcon">{items.icon}</div>
          <div className="featureName">{items.title}</div>
        </div>
      ))}
    </>
  );
};

export default Features;
