import {useState, useEffect} from "react";
import "./Page_weather.css"

export default function Weather() {
    // Utilize API and useEffect to change weather
    const [weather, setWeather] = useState("no value");
    useEffect(() => {
        fetch("http://localhost:3000/weather")
            .then((response) => response.json())
            .then((data) => setWeather(data));
    }, []);

}