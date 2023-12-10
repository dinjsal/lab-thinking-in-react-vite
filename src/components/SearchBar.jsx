import React from "react";

function SearchBar({titleFilter, setTitleFilter, onlyInStock, setOnlyInStock}) {
  
  return (
    <div className="searchbar-div">
       {/* two-way binding */}
       
        <input 
        className="searchbar" 
        value={titleFilter}
        // triggering the event of user input/changing the value + setting setTitleFilter to what the user types
        onChange = {(e) => setTitleFilter(e.target.value)} 
        // e.target.value = whatever the user types into the input
        type="text" 
        placeholder='Type to search'>
        </input>

        <br />

        <input 
        type="checkbox"
        onChange={(e) => setOnlyInStock(e.target.checked)}></input>
        <label htmlFor="inStock">Only show products in stock</label>
    </div>
  )
}

export default SearchBar

