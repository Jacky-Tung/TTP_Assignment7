import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const Distance = (props) => {
  const [zipOne, setZipOne] = useState("");
  const [zipTwo, setZipTwo] = useState("");
  const [unit, setUnit] = useState("mi");
  const [distance, setDistance] = useState({});
 
// 
  async function fetchZipCodes() {
    try {
      const { data } = await axios.get(
        `https://zip-api.eu/api/v1/distance/US-${zipOne}/US-${zipTwo}/${unit}`
      );
      setDistance(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const searchZipOne = (event) => {
    setZipOne(event.target.value);
  };

  const searchZipTwo = (event) => {
    setZipTwo(event.target.value);
  };

  const selectUnit = (event) => {
    setUnit(event.target.value);
  };

  console.log(distance);

  return (
    <div id="container">
      <input
        type="text"
        onChange={searchZipOne}
        id="input"
        placeholder="Enter First Zip"
      />
      <input
        type="text"
        onChange={searchZipTwo}
        id="input"
        placeholder="Enter Second Zip"
      />
      <select name="unit" value={unit} id="unit" onChange={selectUnit}>
        <option value="mi">Miles</option>
        <option value="km">Kilometers</option>
      </select>
      <button onClick={fetchZipCodes} id="searchButton">
        Compute Distance
      </button>
      <h1 className="header">{props.header}</h1>
      <h3>{distance["distance"]}</h3>
      <h3>Unit: {distance.unit}</h3>
    </div>
  );
};

export default Distance;
