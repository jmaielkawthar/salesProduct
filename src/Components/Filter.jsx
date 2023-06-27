import React from "react";

const Filter = ({ textSearch, handleSearch }) => {
  return (
    <div className="">
      <div className="search-form">
        <form>
          <input
            type="text"
            value={textSearch}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
