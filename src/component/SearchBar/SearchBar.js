import React, { useState } from "react";

function SearchBar(props) {
  const { showSearched_list } = props;
  console.log(props);
  const [searchValue, setSearchValue] = useState("");

  const getSearchInput = (e) => {
    let inputText = e.target.value.trim().toUpperCase();
    setSearchValue(inputText);
    showSearched_list(inputText);
  };
  return (
    <div className="relative flex-grow">
      <form className="flex">
        <input
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Search"
          id="SearchBar"
          onChange={getSearchInput}
          value={searchValue}
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 ">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
