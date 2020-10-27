import React, { useState, useEffect } from "react";
import {
  Card,
  Grid,
  GridColumn,
  CardContent,
  CardHeader,
  CardDescription
} from "semantic-ui-react";

function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    var url = "https://swapi.dev/api/films";
    async function fetchFilms() {
      let res = await fetch(url);
      let data = await res.json();
      setFilms(data.results);
    }
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Films</h1>
      {
        <Grid columns={3}>
          {films.map((films, i) => {
            return (
              <GridColumn key={i}>
                <Card>
                  <CardContent>
                    <CardHeader>Episode: {films.episode_id}</CardHeader>
                    <CardDescription>
                      <strong>Title</strong>
                      <p>{films.title}</p>
                    </CardDescription>
                  </CardContent>
                </Card>
              </GridColumn>
            );
          })}
        </Grid>
      }
    </>
  );
}
export default Films;
