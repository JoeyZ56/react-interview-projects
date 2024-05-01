State:
typeOfColor: Stores the current type of color format, initialized to "hex".
color: Stores the current color, initialized to black (#000000).

randomColorUtility:
This function generates a random index based on the input length, used to select random elements from arrays or to generate random numbers up to a certain value.

hanldeCreateRandomHexColor:
Generates a random Hex color by concatenating random elements from the hex array to form a string like #F1A2B3.

handleCreateRandomRgbColor:
Generates a random RGB color by creating three random numbers between 0 and 255 for the red, green, and blue components, respectively.

useEffect:
This effect runs whenever typeOfColor changes. It triggers the appropriate function to generate a new color based on the selected type (Hex or RGB).
