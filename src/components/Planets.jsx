import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  Grid,
  GridColumn,
  CardContent,
  CardDescription,
} from "semantic-ui-react";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import debounce from "lodash/debounce";
import SearchPlanet from "./SearchPlanet";

function Planets() {
  var [pageNum, setpageNum] = useState(1);
  const [planets, setPlanet] = useState([]);
  useEffect(() => {
    var url = "https://swapi.dev/api/planets/?page=" + pageNum;
    async function fetchPlanets() {
      let res = await fetch(url);
      let data = await res.json();
      setPlanet(data.results);
    }
    fetchPlanets();
  }, [pageNum]);

  const Add = useCallback(
    debounce(() => {
      if (pageNum < 6) {
        pageNum++;
        setpageNum(pageNum);
      }
    }, 300),
    []
  );
  const Prev = useCallback(
    debounce(() => {
      if (pageNum > 1) {
        pageNum--;
        setpageNum(pageNum);
      }
    }, 300),
    []
  );

  return (
    <>
      <h1>Planets</h1>
      <Grid columns={3}>
        {planets.map((planet, i) => {
          const id = planet.url.match(/\/planets\/(?<id>\d+)\/$/).groups.id
          return (
            <GridColumn key={i}>
              <Card >
                <CardContent>
                  <CardDescription>
                    <Link to={"/planet/" + id}>
                      <Menu.Item className="cardHeader" name={planet.name} />
                    </Link>
                  </CardDescription>
                </CardContent>
              </Card>
            </GridColumn>
          );
        })}
      </Grid>
      <SearchPlanet />
      <div id="prev-next-div">
        <button id="prevButton" onClick={Prev} className="next round">
          &#8249;
        </button>
        <button id="nextButton" onClick={Add} className="next round">
          &#8250;
        </button>
      </div>
    </>
  );
}
export default Planets;
