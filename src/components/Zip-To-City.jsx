import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const ZipToCity = (props) => {
  const [city, setCity] = useState({});
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");
  const zip = props.zip;

  // do u ppl like pokemon bwahwa? yea
  useEffect(() => {
    async function fetchCity() {
      try {
        const { data } = await axios.get(
          `https://zip-api.eu/api/v1/info/US-${zip}`
        );
        setCity(data);
        // setZipCode(list.data.results);
        // setError(list.data.results);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCity();
  }, []);

  return (
    <div id="container">
      <h1 className="header">{props.header}</h1>
      Enter Zip Code
      <input type="text" pattern="[0-9]"/> 
      <p>{city.country_code}</p>
      <p>{city.place_name}</p>
      
    </div>
  );
};

export default ZipToCity;
