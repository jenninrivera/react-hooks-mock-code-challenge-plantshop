import React from "react";

function Search({setPlantSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={e => setPlantSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
