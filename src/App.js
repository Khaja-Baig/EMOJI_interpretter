import React, { useState } from "react";
import "./styles.css";
var emojiDic = {
  "👽": "far-out behavior",
  "🥺": "Face with Pleading Eyes",
  "🤗": "Hugging face",
  "🤒": "Sick Face",
  "👻": "Ghost Emoji",
  "🥶": "Cold Face"
};
var emojiList = Object.keys(emojiDic);

var heading = "Emoji Interpreter";
export default function App() {
  var [meaning, setMeaning] = useState("");
  var styling = {
    backgroundColor: "black",
    color:"white",
    width: "40%",
    padding:"1rem",
    borderRadius: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
  };
  var alStyle = {
    backgroundColor: "#6082B6",
    width: "50%",
    padding: "5rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "3rem"
  };
  function changeCatch(event) {
    var meaning = emojiDic[event.target.value];
    setMeaning(meaning);
    if (meaning === undefined) {
      setMeaning("this emoji is not in our library");
    }
  }
  function clickCatch(emoji) {
    var meaning = emojiDic[emoji];
    setMeaning(meaning);
  }
  return (
    <body>
    <div className="App">
      <h1 style={styling}>{heading}</h1>
      <div style={alStyle}>
        
        <input onChange={changeCatch}></input>
        <h2>{meaning}</h2>
        <h3>emoji we have</h3>
        {emojiList.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => clickCatch(emoji)}
              style={{
                fontSize: "2rem",
                padding: "1rem",
                cursor: "pointer",
                backgroundColor: "black",
                // padding: "0.5rem",
                borderRadius: "1.7rem"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
    </body>
  );
}