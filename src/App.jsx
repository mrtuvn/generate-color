import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

/*

Display a form with a label 'Number of boxes’ associated with a textbox that allows numeric value in range of 1 and 128 and a button with text ‘Generate’.
Given user input value N into the textbox, when user clicks on “Generate” button, there are N boxes generated with text ‘Box #1', 'Box #2', ‘Box #N’… in turn. The box color is “antiquewhite”  and text align center box.
If value is 0, please show text “no box”.
Show background color random when user toggle box.

Purpose:
Apply lists & key
Apply conditional rendering
Handle Event

*/

function App() {
  const [boxCount, setBoxCount] = useState(0);
  const [boxes, setBoxes] = useState([]);

  const genRandomHexColor = () => {
    let hexColorCode = "#";
    hexColorCode =
      hexColorCode + Math.floor(Math.random() * (256 * 256 * 256)).toString(16);
    return hexColorCode;
  };

  const handleButtonAdd = (boxCount) => {
    console.log(boxCount);

    // gen array with number of box
    const newBox = {
      id: "",
      text: "",
      color: "",
    };

    let newBoxInstance = [];

    for (let i = 0; i < boxCount; i++) {
      newBoxInstance.push({
        ...newBox,
        id: i + 1,
        text: `Box #${i + 1}`,
        color: genRandomHexColor(),
      });
    }
    console.log(newBoxInstance);
    setBoxes(newBoxInstance);

    console.log(boxes);
  };

  return (
    <>
      <h1>Sample App: GenerateBox</h1>
      <div>
        <label htmlFor="boxCount">Number of boxes</label>
        <input
          name="boxCount"
          value={boxCount}
          default={0}
          onChange={(e) => setBoxCount(e.target.value)}
        />
        <button type="button" onClick={(e) => handleButtonAdd(boxCount)}>
          Generate
        </button>
      </div>
      <div className="cards">
        {boxes && (
          <ul className="listBoxes">
            {boxes.map((box) => (
              <li
                key={box.id}
                className="box"
                style={{
                  backgroundColor: box.color ? box.color : "",
                }}
              >
                {box.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
