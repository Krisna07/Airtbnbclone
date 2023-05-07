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
  const updateFeatures = (newFeatures) => {
    setFeatures(newFeatures);
  };
  const updateProperty = (property) => {
    setProperty(property);
  };
  const options = {
    loaction: "Australia",
    type: features,
  };
  useEffect(() => {
    const fetchpropertyDetails = async () => {
      try {
        const respoonse = await axios.get(
          `https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=20&start=0&${
            features ? `refine.property_type=${features}` : ""
          }&refine.country=${options.loaction}`
        );
        setListing(respoonse.data.records);
        console.log(respoonse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchpropertyDetails();
  }, [features]);
  console.log(features);
  return (
    <div className="App">
      <Navbar updateFeatures={updateFeatures} />
      {property ? (
        <Listing property={property} updateProperty={updateProperty} />
      ) : (
        <Thumbnail
          listing={listing.length > 0 ? listing : []}
          updateProperty={updateProperty}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
