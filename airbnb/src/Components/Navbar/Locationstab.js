import React from "react";

const Locationstab = ({
  hoverItem,
  setActiveSelect,
  leavehover,
  activeSelect,
}) => {
  const mapItems = [
    {
      title: "I,m flexible",
      imgsrc:
        "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    },
    {
      title: "Europe",
      imgsrc:
        "https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320",
    },
    {
      title: "New Zealand",
      imgsrc:
        "https://a0.muscache.com/im/pictures/72d843e8-4274-4ee7-a65b-23021c6e4a1c.jpg?im_w=320",
    },
    {
      title: "Southeast Asia",
      imgsrc:
        "https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320",
    },
    {
      title: "United Kingdom",
      imgsrc:
        "https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320",
    },
    {
      title: "United States",
      imgsrc:
        "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    },
  ];
  return (
    <div
      className="opt location"
      onMouseOver={hoverItem}
      onClick={() => {
        setActiveSelect("location");
      }}
      onMouseLeave={leavehover}
      style={{
        backgroundColor: `${activeSelect === "location" ? "white" : ""}`,
      }}
    >
      Where
      <span>Search destination</span>
      <div
        className="loactionOpts"
        style={{
          display: `${activeSelect === "location" ? "flex" : "none"}`,
        }}
      >
        <div className="opttitle">
          <h2>Search by region</h2>
        </div>
        <div className="mapItems">
          {mapItems.map((items, x) => (
            <div className="map-box" key={x}>
              <div className="img-container">
                <img src={items.imgsrc} alt="" />
              </div>
              <span style={{ color: "black" }}>{items.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locationstab;
