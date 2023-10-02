import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

import Footer from "./Components/Footer/Footer";
import Listing from "./Components/Listing/Listing";
import Thumbnail from "./Components/Listingpage/Thumbnail";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [listing, setListing] = useState([]);
  const [property, setProperty] = useState();
  const [features, setFeatures] = useState("");
  const [PropertyCount, setPropertyCount] = useState(40);
  const updateFeatures = (newFeatures) => {
    setFeatures(newFeatures);
  };
  const updateProperty = (property) => {
    setProperty(property);
  };
  const options = {
    location: "Australia",
    type: features,
  };
  useEffect(() => {
    const fetchpropertyDetails = async () => {
      try {
        const respoonse = await axios.get(
          `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=${PropertyCount}&start=0&${
            features ? `refine.property_type=${features}` : ""
          }&refine.country=${options.location}`,
        );
        setListing(respoonse.data.records);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpropertyDetails();
  }, [features, PropertyCount]);
  const updatePropertyCount = (count) => {
    return setPropertyCount(PropertyCount + count);
  };
  return (
    <div className="App">
      <Navbar updateProperty={updateProperty} />
      {property ? (
        <Listing
          property={property}
          updateProperty={updateProperty}
        />
      ) : (
        <Thumbnail
          listing={listing.length > 0 ? listing : []}
          updateProperty={updateProperty}
          updateFeatures={updateFeatures}
          updatePropertyCount={updatePropertyCount}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
