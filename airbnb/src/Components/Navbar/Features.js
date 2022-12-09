import React from "react";
import { FaFire, FaHome } from "react-icons/fa";
import { GiBowlingPin, GiFishingBoat, GiIsland } from "react-icons/gi";

const Features = () => {
  const features = [
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <GiIsland />,
    },
    {
      title: "Trending",
      icon: <GiBowlingPin />,
    },
    {
      title: "Design",
      icon: <GiFishingBoat />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
    },
    {
      title: "Design",
      icon: <FaHome />,
    },
    {
      title: "Trending",
      icon: <FaFire />,
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
