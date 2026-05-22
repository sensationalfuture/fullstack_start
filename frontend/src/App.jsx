import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Page_calc from "./Pages/Page_calc.jsx";
import Page_weather from "./Pages/Page_weather.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page_calc />} />
        <Route path="/weather" element={<Page_weather/>} />
      </Routes>
    </>
  );
}
