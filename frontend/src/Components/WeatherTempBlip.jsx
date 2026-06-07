
/* 

daily:
temperature_2m_max: (7) [18.6, 15.8, 20.4, 16.5, 18.1, 17.3, 15.9]
temperature_2m_min: (7) [13.7, 12.8, 11.6, 12, 10.4, 11.1, 12.2]
time: (7) ['2026-06-05', '2026-06-06', '2026-06-07', '2026-06-08', '2026-06-09', '2026-06-10', '2026-06-11']
[[Prototype]]: Object
daily_units: {time: 'iso8601', temperature_2m_max: '°C', temperature_2m_min: '°C'}
elevation: 23
generationtime_ms: 0.10037422180175781
latitude: 51.5
longitude: -0.25
timezone: "Europe/London"
timezone_abbreviation: "GMT+1"
utc_offset_seconds: 3600
[[Prototype]]: Object

format for API weather response.

we expect temp to be like this: 18.6
we expect date to be like this: '2026-06-05'
*/
export default function WeatherTempBlip({weatherData,id}) {
  const c_to_f = (c) => (c * 9) / 5 + 32;
  const highTemp = c_to_f(weatherData.daily?.temperature_2m_max[id]).toFixed(1);
  const lowTemp = c_to_f(weatherData.daily?.temperature_2m_min[id]).toFixed(1);
  const averageTemp = ((parseFloat(highTemp) + parseFloat(lowTemp)) / 2).toFixed(1);
  let bg_color = "bg-sky-300";
  if (!weatherData.daily) {
    return
  }
  if (id===0) {
    bg_color = "bg-rose-300";
  } 

    return (
      <>
        <div className={`${bg_color} rounded-lg mt-4 items-center p-1 flex-auto`}>
          {id === 0 && (
            <p className="text-xl font-bold text-rose-500">Tommorow's Date</p>
          )}
          <p>{weatherData.daily?.time[id]}</p>
          <p className="font-bold">Average: {averageTemp}°F</p>
          <p>Highest: {highTemp}°F</p>
          <p>Lowest: {lowTemp}°F</p>
        </div>
      </>
    );
}