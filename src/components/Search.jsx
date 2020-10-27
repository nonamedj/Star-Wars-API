import React, { useState } from "react";
import axios from "axios";
import debounce from "lodash/debounce";


/* const debounce = (fn, mili) => {
  let id;
  return (...args) => {
    clearInterval(id);
    id = setInterval(() => fn(...args), mili);
  };
}; */

const find = debounce(
  (setSearchResult, input) =>
    axios("https://swapi.dev/api/people/?search=" + input).then((res) =>
      setSearchResult(res.data.results)
    ),
  300
);

function clear() {
    document.getElementsByClassName('search-input')[0].value = '';
    const names = document.getElementsByClassName('sr-h1');
    for(let i=0;i<names.length;i++) {
      names[i].style.display = 'none';
    }
}

function Search() {
  const [searchResult, setSearchResult] = useState([]);

  function handleChange(event) {
    const names = document.getElementsByClassName('sr-h1');
    for(let i=0;i<names.length;i++) {
      names[i].style.display = 'inline';
    }
    find(setSearchResult, event.target.value);
  }

  return (
    <>
      <div className="search-div">
        <h1>Search People</h1>
        <input className="search-input" onChange={handleChange} type="text" />
        <button className="clearButton" onClick={clear}>
          Clear
        </button>
      </div> {
        searchResult.map((matchResult) => (
        <div id="sr-div" className="search-result-div">
          <h1 className="sr-h1">{matchResult.name}</h1>
        </div>
      ))}
    </>
  );
}
export default Search;
