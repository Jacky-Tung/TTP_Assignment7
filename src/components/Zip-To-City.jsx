import React, { Component, useEffect, useState } from "react";
import axios from "axios";

const ZipToCity = (props) => {
  const [city, setCity] = useState({});
//   const [zipCode, setZipCode] = useState();
//   const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");

// Input box approach onChange zip code
//   useEffect(() => {
//     async function fetchCity() {
//       try {
//         const { data } = await axios.get(
//           `https://zip-api.eu/api/v1/info/US-${props.zip}`
//         );
//         setCity(data);
//         // setZipCode(list.data.results);
//         // setError(list.data.results);
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchCity();
//   }, [props.zip]);

// search button approach onClick zip code
  async function fetchCity() {
    try {
      const { data } = await axios.get(
        `https://zip-api.eu/api/v1/info/US-${inputValue}`
      );
      setCity(data);
      // setZipCode(list.data.results);
      // setError(list.data.results);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const search = (event) => {
    setInputValue(event.target.value);
  };

  console.log(props.zip);
  return (
    <div id="container">
      <input type="text" onChange={search} id="input"/>
      <button onClick={fetchCity} id="searchButton">
        Search
      </button>
      <h1 className="header">{props.header}</h1>

      <p>{city.country_code}</p>
      <p>{city.place_name}</p>
    </div>
  );
};

export default ZipToCity;
