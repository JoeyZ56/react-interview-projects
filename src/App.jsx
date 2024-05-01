import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/random-color" element={<RandomColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
