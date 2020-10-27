import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription } from "semantic-ui-react";
import axios from "axios";

function Character(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    axios("https://swapi.dev/api/people/" + props.match.params.id).then((res) =>
      setResult(res.data)
    );
  }, [props]);
  
  return (
    <>
      <h1>Character Info</h1>
      <Card>
        <CardContent>
          <CardDescription>
            <h1>{result?.name} </h1>
            <strong className="cardContent">Height</strong>
            <p className="cardContent">{result?.height}</p>
            <strong className="cardContent">Mass</strong>
            <p className="cardContent">{result?.mass}</p>
            <strong className="cardContent">Gender</strong>
            <p className="cardContent">{result?.gender}</p>
            <strong className="cardContent">Birth Year</strong>
            <p className="cardContent">{result?.birth_year}</p>
            <strong className="cardContent">Eye Color</strong>
            <p className="cardContent">{result?.eye_color}</p>
            <strong className="cardContent">Eye Color</strong>
            <p className="cardContent">{result?.hair_color}</p>
            <strong className="cardContent">Eye Color</strong>
            <p className="cardContent">{result?.skin_color}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
export default Character;
