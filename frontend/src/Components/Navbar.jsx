import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/" className="header">
        Home
      </Link>
      <Link to="/" className="header">
        About
      </Link>
      <Link to="/" className="header">
        Contact
      </Link>
    </nav>
  );
}
