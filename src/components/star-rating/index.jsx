import { useState } from "react";
import { FaStar } from "react-icons/fa";
// import { checkPropTypes } from "prop-types";
import "./style.css";
import Nav from "../Nav/nav";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  //handle functions for onClick events
  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };

  //handle functions for onMouseEnter and onMouseLeave events
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <>
      <Nav />
      <div className="star-rating">
        {/* the index represents the potsition of each element in the array */}
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}

// StarRating.propTypes = {
//   noOfStars: checkPropTypes.number,
// };
