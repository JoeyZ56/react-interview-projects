import Accordian from "./components/accordian";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accordian" element={<Accordian />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
