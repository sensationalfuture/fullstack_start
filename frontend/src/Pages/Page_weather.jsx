import { useState, useEffect } from "react";
import "./Page_weather.css";
import WeatherBlip from "../Components/WeatherTempBlip.jsx";

export default function Weather() {
  const [location, setLocation] = useState(""); // needed from getting input -> achieve geolocation of weather
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [weatherData, setWeatherData] = useState([]); // needed to store that data from server
  const [search, setSearch] = useState(0);

  // useEffect
  useEffect(() => {
    // fetch data fron server, anythime we change the location;
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`,
    )
      .then((response) => response.json())
      // edit later this WILL NOT WORK with given API.
      .then((data) => {
        if (!data.results || data.results.length === 0) {
          console.log("No results found for " + location);
          return;
        }

        const lat = data.results[0].latitude;
        const lon = data.results[0].longitude;

        setCoordinates({
          latitude: lat,
          longitude: lon,
        });
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`,
        );
      })
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log("Weather data fetched successfully:", data);
      })
      .catch((error) =>
        console.log(
          "There was an error fetching the geolocation data:",
          error,
          coordinates,
          location,
          weatherData,
        ),
      );
  }, [search]);

  return (
    <>
      <form>
        <div className="bg-blue-400 rounded-lg p-4">
          <label className="text-blue-900 font-mono" htmlFor="location">
            Enter Location:
          </label>
          <input
            className="border-2 border-gray-300 rounded-md p-2 ml-2 text-black hover:border-pink-500"
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            className="m-2 p-2 bg-green-600 text-white rounded-3xl outline-1 hover:bg-indigo-100"
            type="button"
            value="Submit"
            onClick={() => setSearch(search + 1)}
          ></input>
        </div>
      </form>
      <div>
        <h1>{location}</h1>
        <p className="text-green-400">Latitude: {coordinates.latitude}</p>
        <p className="text-green-400">Longitude: {coordinates.longitude}</p>
        <div className="bg-sky-400 rounded-lg p-4 mt-4">
          <h2 className="font-bold text-yellow-400">7-Day Forecast</h2>
          <WeatherBlip temperature={weatherData.daily?.temperature_2m_max[0]} date="Tomorrow" />
        </div>
      </div>
    </>
  );
}