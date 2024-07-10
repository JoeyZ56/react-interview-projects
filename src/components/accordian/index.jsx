//open a single section at a time
//open multiple sections at a time
import { useState } from "react";
import data from "./data";
import "./styles.css";
import Nav from "../Nav/nav";

export default function Accordian() {
  const [selected, setSelected] = useState(null); //setting the state to null because nothing is selected initially
  const [enableMultiSelection, setEnableMultiSelection] = useState(false); //setting the state to false because multi selection is not enabled initially
  const [selectMultiple, setSelectMultiple] = useState([]); //setting the state to empty array because nothing is selected initially
  const [color, setColor] = useState("red");

  const handleSingleSeletion = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const handleMultiSelection = (getCurrentId) => {
    let cpySelectMuliple = [...selectMultiple];
    const findIndexOfCurrentId = cpySelectMuliple.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpySelectMuliple.push(getCurrentId);
    } else {
      cpySelectMuliple.splice(findIndexOfCurrentId, 1);
    }

    setSelectMultiple(cpySelectMuliple);
  };
  console.log(selected, selectMultiple);

  const handleButtonClick = () => {
    setEnableMultiSelection(!enableMultiSelection);
    setColor(color === "red" ? "green" : "red");
  };

  return (
    <>
      <div className="container">
        <Nav />
        <h1>Accordian</h1>
        <button
          onClick={handleButtonClick}
          className="multi-seletion-btn"
          style={{ backgroundColor: color }}
        >
          Enable Multi Seletction
        </button>

        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSeletion(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.title}</h3>
                  <span>+</span>
                </div>
                {selected === dataItem.id ||
                selectMultiple.indexOf(dataItem.id) !== -1 ? (
                  <div>{dataItem.info}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="no-data">No data found</div>
          )}
        </div>
      </div>
    </>
  );
}
