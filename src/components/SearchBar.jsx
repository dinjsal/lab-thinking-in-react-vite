import React from 'react'

function SearchBar() {
  return (
    <div className="searchbar-div">
        <p>Search</p>
        <input className="searchbar" type="text"></input><br />
        <input type="checkbox"></input>
        <label>Only show products in stock</label>
    </div>
  )
}

export default SearchBar