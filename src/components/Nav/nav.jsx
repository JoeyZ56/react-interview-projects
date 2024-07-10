import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <div className="main-container">
      <Link to="/" className="nav-links">
        Home
      </Link>
      <Link to="/accordian" className="nav-links">
        Accordian
      </Link>
      <Link to="/random-color" className="nav-links">
        Random Color
      </Link>
      <Link to="/star-rating" className="nav-links">
        Star Rating{" "}
      </Link>
      <Link to="/image-slider" className="nav-links">
        Image Slider{" "}
      </Link>
    </div>
  );
}
