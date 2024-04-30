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
      </div>
    </div>
  );
}
