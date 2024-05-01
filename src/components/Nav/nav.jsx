import { Link } from "react-router-dom";
import "./style.css";

export default function Nav() {
  return (
    <div className="container">
      <div className="nav-routes">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/accordian" className="nav-link">
          Accordian
        </Link>
        <Link to="/random-color" className="nav-link">
          Random Color
        </Link>
        <Link to="/star-rating" className="nav-link">
          Star Rating{" "}
        </Link>
      </div>
    </div>
  );
}
