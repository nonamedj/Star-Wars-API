import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription } from "semantic-ui-react";
import axios from "axios";

function Planet(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    axios("https://swapi.dev/api/planets/" + props.match.params.id).then((res) =>
      setResult(res.data)
    );
  }, [props]);
  
  return (
    <>
      <h1>Planet Info</h1>
      <Card>
        <CardContent>
          <CardDescription>
            <h1>{result?.name} </h1>
            <strong className="cardContent">Rotation Period</strong>
            <p className="cardContent">{result?.rotation_period}</p>
            <strong className="cardContent">Population</strong>
            <p className="cardContent">{result?.population}</p>
            <strong className="cardContent">Orbitl Period</strong>
            <p className="cardContent">{result?.orbital_period}</p>
            <strong className="cardContent">Diameter</strong>
            <p className="cardContent">{result?.diameter}</p>
            <strong className="cardContent">Climate</strong>
            <p className="cardContent">{result?.climate}</p>
            <strong className="cardContent">Gravity</strong>
            <p className="cardContent">{result?.gravity}</p>
            <strong className="cardContent">Terrain</strong>
            <p className="cardContent">{result?.terrain}</p>
            <strong className="cardContent">Surface Water</strong>
            <p className="cardContent">{result?.surface_water}</p>
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
export default Planet;
