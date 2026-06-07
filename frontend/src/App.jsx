import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import Page_calc from "./Pages/Page_calc.jsx";
import Page_weather from "./Pages/Page_weather.jsx";
import Page_tictactoe from "./Pages/Page_tictactoe.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page_calc />} />
        <Route path="/weather" element={<Page_weather/>} />
        <Route path="/tictactoe" element={<Page_tictactoe />} />
      </Routes>
    </>
  );
}
