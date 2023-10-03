import React, { useState } from "react";

const HosttImageContainer = ({ property }) => {
  const [image, isImage] = useState();
  function isValidImageUrl(url) {
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
  }

  // Example usage
  let imageUrl = property.fields.host_picture_url;

  isValidImageUrl(imageUrl)
    .then((isValid) => {
      if (isValid) {
        isImage(true);
      } else {
        isImage(false);
      }
    })
    .catch((error) => {
      isImage(false);
    });

  return (
    <div className="imagebookContainer">
      <div className="hostImage">
        <hr className="line" />
        {image === true ? (
          <img
            src={`${property.fields.host_picture_url}`}
            alt=""
          />
        ) : (
          <div className="noImage"></div>
        )}
      </div>
    </div>
  );
};

export default HosttImageContainer;
