import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Data from './Data.json';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="background-gif-container">
      <img src="./3.gif" alt="GIF Resmi" className="background-gif"/>
    <div className="container">
      <h1>Arabalar</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Araba giriniz..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {Data.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="data" key={val.id}>
              <img src={val.image} alt={val.title} />  
              <h3>{val.title}</h3>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default App;
