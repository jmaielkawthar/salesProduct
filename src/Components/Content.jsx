import React from "react";
import { Routes, Route } from 'react-router-dom';

const Content = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/home">
          <h1>Home Page</h1>
        </Route>
        <Route path="/about">
          <h1>About Page</h1>
        </Route>
        <Route path="/products">
          <h1>Products Page</h1>
        </Route>
        <Route path="/contact">
          <h1>Contact Page</h1>
        </Route>
      </Routes>
    </div>
  );
};


export default Content;
