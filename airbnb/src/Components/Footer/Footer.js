import React from "react";
import { FaChevronUp, FaGlobe } from "react-icons/fa";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="rightFooter">
          <span>&#169; 2023 Airbnb, Inc</span>
          <ul className="leftList">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Destinantions</li>
          </ul>
        </div>
        <div className="leftFooter">
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <FaGlobe /> English (AU)
          </div>
          <div>$ AUD</div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            Support & resource <FaChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
}
