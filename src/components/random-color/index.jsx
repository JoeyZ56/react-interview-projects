import { useEffect, useState } from "react";
import "./style.css";
import Nav from "../Nav/nav";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  const [activeButton, setActiveButton] = useState("hex");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  //handle functions for onClick events
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`); // template literal
  };

  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]); // eslint-disable-line

  const handleHexButtonClick = () => {
    setTypeOfColor("hex");
    setActiveButton("hex");
  };

  const handleRgbButtonClick = () => {
    setTypeOfColor("rgb");
    setActiveButton("rgb");
  };

  return (
    <>
      <Nav />
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <div className="buttons-container">
          <button
            onClick={handleHexButtonClick}
            className="color-btn"
            style={{
              backgroundColor: activeButton === "hex" ? "green" : "white",
            }}
          >
            Create Hex Color
          </button>
          <button
            onClick={handleRgbButtonClick}
            className="color-btn"
            style={{
              backgroundColor: activeButton === "rgb" ? "green" : "white",
            }}
          >
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
            className="color-btn generate-btn"
          >
            Generate Random Color
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "white",
            fontSize: "2rem",
            marginTop: "10rem",
            gap: "1rem",
          }}
        >
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
