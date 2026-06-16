import { useState, useEffect } from "react";
import "./Page_weather.css";
import WeatherBlips from "../Components/WeatherBlips.jsx";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({}); // data of both coords and weather.
  const [location, setLocation] = useState(""); // location state to store the user input for location.
  const [search, setSearch] = useState(0); // requred to trigger useEffect when we click submit button.

  // useEffect
  useEffect(() => {
    // fetch data fron server, anythime we change the location;
    if (!location) return; // if location is empty, do not fetch data.
    fetch(`http://localhost:3000/api/v1/weather/location?location=${location}`)
      .then((response) => response.json())
      .then((data) => {
        // SUCCESS RESPONSE FROM SERVER
        setWeatherData(data);
        if (data.status === "error") {
          console.log("Error fetching weather data:", data.message);
        } else {
          console.log("Weather data fetched successfully:", data);
        }
      });
  }, [search]);

  return (
    <>
      <form>
        <div className="bg-blue-400 rounded-lg p-4 ">
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
        <h1 className="text-2xl font-bold text-sky-500">{location}</h1>
        <p className="text-green-400">
          Latitude:{" "}
          {weatherData.status === "success"
            ? weatherData.location?.latitude
            : "N/A"}
        </p>
        <p className="text-green-400">
          Longitude:{" "}
          {weatherData.status === "success"
            ? weatherData.location?.longitude
            : "N/A"}
        </p>
        <div className="bg-sky-400 rounded-lg p-4 mt-4">
          <h2 className="font-bold text-yellow-400">7-Day Forecast</h2>
          {weatherData.status === "success" ? (
            <WeatherBlips weatherData={weatherData} />
          ) : (
            <h1 className="text-amber-500">Data Not Entered</h1>
          )}
        </div>
      </div>
    </>
  );
}