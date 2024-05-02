State:
ratings = the stars current set highlighted are 0, in the array "noOfStars"
hover = the starts current set havered in the array "noOfStars"

handle functions:
handleClick = set the parameter to getTheCurrentIndex, then set the state "setRating" to the current index.

handleMouseEnter = sets the paramerer to getCurrentIndex, then sets the state "setHover" to the getCurrentIndex.

handleMouseLeave = setting the "setHover" state to the "rating" state so when the mouse is clicked and leaves the array it hold that rating clicked.

rendered:
the [...Array(noOfStars)] creates an array of "noOfstars". the"Map" function transforms each element in the array. the "index" represents the position of each element in the array.

"index += 1" increments the index by 1

"className={index <= (hover || rating) ? "active" : "inactive"}" this controls the style of the each star based on the hover and current rating.

"onClick" handles what happens to the stars when clicked, making the number of stars in the array clicked turn to the "active" value.

"onMouseOver" when hovering over the array highlights the value of the index of the stars that have been added to the "active" value.

"onMouseLeave" leaves the stars where they were selected active in the array, or resets the array to null if no stars where clicked.
