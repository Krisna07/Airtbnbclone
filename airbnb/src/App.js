import "./App.css";
import Footer from "./Components/Footer/Footer";
import Thumbnail from "./Components/Listingpage/Thumbnail";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Thumbnail />
      <Footer />
    </div>
  );
}

export default App;
