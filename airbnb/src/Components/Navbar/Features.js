import React from "react";
import {
  GiAlienBug,
  GiBathtub,
  GiBeachBag,
  GiBunkBeds,
  GiCampfire,
  GiCastle,
  GiDiamondRing,
  GiEnergyBreath,
  GiFamilyHouse,
  GiFruitBowl,
  GiGolfFlag,
  GiHearts,
  GiHills,
  GiHouse,
  GiPoolDive,
  GiShoppingBag,
  GiSkiBoot,
  GiTreeBranch,
  GiWineBottle,
} from "react-icons/gi";
import { RiScreenshotFill } from "react-icons/ri";
import { SiWolfram } from "react-icons/si";
import { FaFire, FaHatCowboy, FaPaw } from "react-icons/fa";
import { BiBuilding } from "react-icons/bi";

const Features = () => {
  const features = [
    {
      title: "Rooms",
      icon: <GiBunkBeds />,
    },
    {
      title: "Countryside",
      icon: <GiHills />,
    },
    {
      title: "Tiny homes",
      icon: <GiHouse />,
    },
    {
      title: "Amazing views",
      icon: <RiScreenshotFill />,
    },
    {
      title: "Design",
      icon: <SiWolfram />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "OMG!",
      icon: <GiAlienBug />,
    },
    {
      title: "Luxury",
      icon: <GiDiamondRing />,
    },
    {
      title: "Beachfront",
      icon: <GiBeachBag />,
    },
    {
      title: "Ski-in/ski-out",
      icon: <GiSkiBoot />,
    },
    {
      title: "Castles",
      icon: <GiCastle />,
    },
    {
      title: "Family-friendly",
      icon: <GiFamilyHouse />,
    },
    {
      title: "Pet-friendly",
      icon: <FaPaw />,
    },
    {
      title: "Eco-friendly",
      icon: <GiEnergyBreath />,
    },
    {
      title: "Romantic",
      icon: <GiHearts />,
    },
    {
      title: "City",
      icon: <BiBuilding />,
    },
    {
      title: "Shopping",
      icon: <GiShoppingBag />,
    },
    {
      title: "Spa",
      icon: <GiBathtub />,
    },
    {
      title: "Adventure",
      icon: <FaHatCowboy />,
    },
    {
      title: "Golf",
      icon: <GiGolfFlag />,
    },
    {
      title: "Camping",
      icon: <GiCampfire />,
    },
    {
      title: "Nature",
      icon: <GiTreeBranch />,
    },
    {
      title: "Farm stays",
      icon: <GiFruitBowl />,
    },
    {
      title: "Wine country",
      icon: <GiWineBottle />,
    },
    {
      title: "Pools",
      icon: <GiPoolDive />,
    },
  ];

  return (
    <>
      {features.map((items, x) => (
        <div className="featureContainer" key={x}>
          <div className="featureIcon">{items.icon}</div>
          <div className="featureName">{items.title}</div>
        </div>
      ))}
    </>
  );
};

export default Features;
