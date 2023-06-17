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
  
      <h1 className="header">{props.header}</h1>

    <section className="description">
      <p>Welcome to ZipFinder, 
        your one-stop destination for quick and accurate zip code searches! 
        Whether you're sending a package, planning a road trip, or simply curious 
        about the zip code of a particular location, our user-friendly website is 
        here to assist you.
      </p>
      <p>
      At ZipFinder, we understand the importance of finding accurate zip codes 
      efficiently. Our comprehensive database is regularly updated to ensure you 
      have access to the most current and reliable information. With a simple and 
      intuitive interface, you can quickly search for zip codes within the United
       States, saving you time and eliminating the frustration of incorrect or 
       outdated data.
      </p>
      </section>
      <input type="text" onChange={search} id="input"/>
      <button onClick={fetchCity} id="searchButton">
        Search
      </button>
      
        <div className="country">
          <p>{city.country_code}</p>
          <p>{city.place_name}</p>
        </div>
    </div>
  );
};

export default ZipToCity;