import React, { useState, useEffect } from "react";
import {Card, Grid, GridColumn, CardContent, CardDescription} from "semantic-ui-react";

function Starships() {

    var [pageNum, setpageNum] = useState(1);
    
    const [starships, setStarships] = useState([]);
    useEffect(() => {
        var url = "https://swapi.dev/api/starships/?page=" + pageNum;
        async function fetchStarships() {
            let res = await fetch(url);
            let data = await res.json();
            setStarships(data.results);
          }
          fetchStarships();
    },[pageNum]);

    function Add() {
        if(pageNum < 4) {
         pageNum++;
         setpageNum(pageNum)
        }
    }
    function Prev() {
        if(pageNum > 1) {
         pageNum--;
         setpageNum(pageNum)
        }
    }

    return (
        <>
            <h1>Starships</h1>
            <Grid columns={3}>
                {starships.map((starships,i) => {
                    return(
                        <GridColumn key={i}>
                            <Card>
                                <CardContent>
                                    <CardDescription>
                                        <h1 className="cardHeader">{starships.name}</h1>
                                        <strong className="cardContent">Name</strong>
                                        <p className="cardContent">{starships.name}</p>
                                        <strong className="cardContent">Model</strong>
                                        <p className="cardContent">{starships.model}</p>
                                        <strong className="cardContent">Lenght</strong>
                                        <p className="cardContent">{starships.length}</p>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </GridColumn>
                    )
                })}
            </Grid>
            <div id="prev-next-div">
                 <button id="prevButton"  onClick={Prev} className="next round">&#8249;</button>
                 <button id="nextButton"  onClick={Add} className="next round">&#8250;</button>
            </div>
        </>
    )
}
export default Starships;