import WeatherBlip from "./WeatherTempBlip.jsx";

export default function WeatherBlips({weatherData}) {
return (
  <div className="flex flex-row gap-4 overflow-x-auto">
    <WeatherBlip weatherData={weatherData} id={0} />
    <WeatherBlip weatherData={weatherData} id={1} />
    <WeatherBlip weatherData={weatherData} id={2} />
    <WeatherBlip weatherData={weatherData} id={3} />
    <WeatherBlip weatherData={weatherData} id={4} />
    <WeatherBlip weatherData={weatherData} id={5} />
    <WeatherBlip weatherData={weatherData} id={6} />
  </div>
);}
