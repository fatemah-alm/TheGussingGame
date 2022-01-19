import React, { useState } from "react";
import Lines from "./Lines";

const Home = () => {
  const [line, setLine] = useState(Lines[0]);
  const [numOfAttempts, setNumberOfAttempts] = useState(3);
  const [secretNum, setSecretnum] = useState(
    Math.floor(Math.random() * (100 - 0 + 1)) + 0
  );

  function returnText() {
    // if (attempts === 0) {
    //   secretNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    // }

    setNumberOfAttempts(numOfAttempts - 1);

    function checkInput(input) {
      if (input == secretNum) {
        console.log("YOU WIN!!");
        setLine(Lines[2]);
        setSecretnum(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
        setNumberOfAttempts(3);
      } else {
        setLine(Lines[1]);
      }
    }

    if (numOfAttempts > 0) {
      let input = document.getElementById("userInput").value;
      //   alert(input);
      console.log(secretNum);
      checkInput(input);
    } else {
      console.log("YOU LOSE!");
      setLine(Lines[3]);
      setNumberOfAttempts(3);
      setSecretnum(Math.floor(Math.random() * (100 - 0 + 1)) + 0);
    }
  }
  function surrender() {
    Lines.push("shame on you, you couldn't even save humanity");
    setLine(Lines[4]);
  }
  return (
    <div className="home">
      <h1 className="head">💣Bomb explosion💣</h1>
      <h3>Find the last number that will stop the Bomb!</h3>
      <h2>{line}</h2>
      <h4>number of attempts: {numOfAttempts}</h4>
      <input id="userInput" type="number" placeholder="0-100" />
      <br />
      <button className="enter" onClick={() => returnText()}>
        Enter!
      </button>
      <br />

      <div className="buttons">
        <button className="button" onClick={() => surrender()}>
          explode!
        </button>
        <button className="button">call 911</button>
      </div>
    </div>
  );
};

export default Home;
