
/* 

{
  "status": "success",
  "location": {
    "latitude": 40.71427,
    "longitude": -74.00597
  },
  "data": {
    "latitude": 40.710335,
    "longitude": -73.99308,
    "generationtime_ms": 0.110507011413574,
    "utc_offset_seconds": -14400,
    "timezone": "America/New_York",
    "timezone_abbreviation": "GMT-4",
    "elevation": 51,
    "daily_units": {
      "time": "iso8601",
      "temperature_2m_max": "°C",
      "temperature_2m_min": "°C"
    },
    "daily": {
      "time": [
        "2026-06-15",
        "2026-06-16",
        "2026-06-17",
        "2026-06-18",
        "2026-06-19",
        "2026-06-20",
        "2026-06-21"
      ],
      "temperature_2m_max": [25.2, 26.3, 23.5, 32.4, 28.7, 25.5, 26.1],
      "temperature_2m_min": [17.7, 12.8, 16.5, 20.8, 19.8, 17.3, 16.3]
    }
  }
}

format for API weather response.

we expect temp to be like this: 18.6
we expect date to be like this: '2026-06-05'
*/
export default function WeatherTempBlip({weatherData,id}) {
  const c_to_f = (c) => (c * 9) / 5 + 32;

  if (!weatherData?.data?.daily) {
    return;
  }
  
  const highTemp = c_to_f(
    weatherData.data.daily.temperature_2m_max[id],
  ).toFixed(1);
  const lowTemp = c_to_f(weatherData.data.daily.temperature_2m_min[id]).toFixed(
    1,
  );
  const averageTemp = ((parseFloat(highTemp) + parseFloat(lowTemp)) / 2).toFixed(1);
  let bg_color = "bg-sky-300";
  if (id===0) {
    bg_color = "bg-rose-300";
  } 

    return (
      <>
        <div className={`${bg_color} rounded-lg mt-4 items-center p-1 flex-auto`}>
          {id === 0 && (
            <p className="text-xl font-bold text-rose-500">Tommorow's Date</p>
          )}
          <p>{weatherData.data.daily?.time[id]}</p>
          <p className="font-bold">Average: {averageTemp}°F</p>
          <p>Highest: {highTemp}°F</p>
          <p>Lowest: {lowTemp}°F</p>
        </div>
      </>
    );
}