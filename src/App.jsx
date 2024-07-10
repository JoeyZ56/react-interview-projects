import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
// import StarRating from "./components/star-rating";
// import ImageSlider from "./components/image-slider";
// import TreeView from "./components/tree-view";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/random-color" element={<RandomColor />} />
          {/* <Route path="/star-rating" element={<StarRating noOfStars={10} />} />
          <Route
            path="/image-slider"
            element={
              <ImageSlider
                url="https://picsum.photos/v2/list"
                page={1}
                limit={10}
              />
            }
          /> */}
          {/* <Route path="/tree-view" element={<TreeView />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
