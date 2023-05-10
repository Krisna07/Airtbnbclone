import { React } from "react";
import { FaIcons } from "react-icons/fa";
import Button from "../Button/Button";

export default function ListingComp({ listingHeadings, items, btnChildren }) {
  return (
    <div className="lisitnComp">
      <div className="lisitingHeading">{listingHeadings}</div>
      <div className="lisitingLists">
        {items
          ? items.map((item, x) => (
              <span key={x} className="listingItems">
                <FaIcons /> {item}
              </span>
            ))
          : ""}
      </div>
      <Button children={btnChildren} />
    </div>
  );
}
