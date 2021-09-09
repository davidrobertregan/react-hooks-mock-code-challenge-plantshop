import React, {useEffect, useState} from "react";

function Search( {returnSearchValue}) {
  
  const [searchInput, setSearchInput] = useState("")

  function searchInputValue(e) {
    setSearchInput(e.target.value)
  }

  useEffect(() => {returnSearchValue(searchInput)})

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        value={searchInput}
        id="search"
        placeholder="Type a name to search..."
        onChange={searchInputValue}
      />
    </div>
  );
}

export default Search;
