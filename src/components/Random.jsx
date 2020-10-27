import React, { useCallback, useState } from "react";
import axios from "axios";

const initialState = {
  name: "",
  height: "",
  mass: "",
  gender: "",
};
const errorState = {
  name: "Sorry, this charactar is on a vacation...",
  height: "...",
  mass: "...",
  gender: "...",
}

let visible = false;

function Random() {
  const [character, setCharacter] = useState(initialState);
  const [loading, setLoading] = useState(false);
  

  const getInfo = useCallback(() => {
    
    setLoading(true);
    const randNum = Math.floor(Math.random() * 82 + 1);
    const url = "https://swapi.dev/api/people/" + randNum;
    visible = true;
    axios
      .get(url)
      .then(function (response) {
        setCharacter(response.data);
        setLoading(false);
      })
      .catch((e) => {
        setCharacter(errorState);
        setLoading(false);
      });
  }, []);

  return (
    <div className="random-div">
      <h1>Random Character</h1>
      <div className="info-container">
        {loading && (
          <div className="spinner">
            <i className="fas fa-circle-notch fa-spin fa-2x"></i>
          </div>
        )}
        {visible && (
          <div>
            <h2 id="randomCharName" className="mt-4">
              {character.name}
            </h2>
            <p id="height">Height: {character.height}</p>
            <p id="mass">Mass: {character.mass}</p>
            <p id="gender">Gender: {character.gender}</p>
          </div>
        )}
      </div>
      <button id="randomCharButton" onClick={getInfo}>
        Get a random Character
      </button>
    </div>
  );
}
export default Random;
