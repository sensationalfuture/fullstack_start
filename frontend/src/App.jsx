import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from "./Components/navbar";
import Page_calc from "./Pages/Page_calc.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route> </Route>
      </Routes>
        <Navbar />
        <Page_calc />
      </BrowserRouter>
    </>
  );
}

