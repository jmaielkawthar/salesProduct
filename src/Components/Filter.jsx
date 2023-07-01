// Filter.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Filter = ({ textSearch, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3008/product?search=${searchTerm}`);
      handleSearch(response.data);
    } catch (error) {
      console.error('Error filtering products:', error);
    }
  };

  return (
    <div className="">
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={handleInputChange} />
          <button type="submit">Search</button>
        </form>
        <Link to={`/cardlist`}>
          <button className="btn" > Show Card</button>
        </Link>

      </div>
    </div>
  );
};

export default Filter;
