import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="flex bg-white px-4 py-2 items-center">
        <ul className="bg-white p-2 float-end flex items-center">
          <li>
            <Link to="/blackhole">
              <img src="/src/assets/blackhole.png" className="h-20 w-30 flex " />
            </Link>
          </li>
          <li>
            <Link to="/" className="header">
              Calculator
            </Link>
          </li>

          <li>
            <Link to="/weather" className="header">
              Weather
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/support" className="header ml-auto">
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
