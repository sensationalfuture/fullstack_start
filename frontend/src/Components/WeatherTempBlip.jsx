
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
export default function WeatherTempBlip({temperature, date, id}) {
    return (
      <>
        <div>
          <p>{date}</p>
          <p>{temperature}</p>
          <p>Highest Temperature: weatherData.daily?.temperature_2m_max[id]</p>
          <p>Lowest Temperature: weatherData.daily?.temperature_2m_min[id]</p>
        </div>
      </>
    );
}