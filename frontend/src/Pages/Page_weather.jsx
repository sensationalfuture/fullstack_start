import {useState, useEffect} from "react";
import "./Page_weather.css"

export default function Weather() {
  // USESTATE basically data.
  const [message, setMessage] = useState("");
  useEffect(() => {
    // should have the function for the actual thing here.
    fetch("http://localhost:3000/message")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching message");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      });
  },);

  // makes it so that it will only run once.
  // however, if we alter what is in the array it will run when the array elems are altered!
  return (
    <>
      <h1 className= "text-shadow-blue-500">{message}</h1>
    </>
  );
}