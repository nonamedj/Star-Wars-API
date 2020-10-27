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
import Search from "./Search";

function People() {
  var [pageNum, setpageNum] = useState(1);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    var url = "https://swapi.dev/api/people/?page=" + pageNum;
    async function fetchPeople() {
      let res = await fetch(url);
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, [pageNum]);

  const Add = useCallback(
    debounce(() => {
      if (pageNum < 9) {
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
      <h1>People</h1>
      <Grid columns={3}>
        {people.map((char, i) => {
          const id = char.url.match(/\/people\/(?<id>\d+)\/$/).groups.id
          return (
            <GridColumn key={i}>
              <Card>
                <CardContent>
                  <CardDescription>
                    <Link to={"/character/" + id}>
                      <Menu.Item className="cardHeader" name={char.name} />
                    </Link>
                  </CardDescription>
                </CardContent>
              </Card>
            </GridColumn>
          );
        })}
      </Grid>
      <Search />
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
export default People;
