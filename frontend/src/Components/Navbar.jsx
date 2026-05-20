import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="flex items-center bg-white px-4 py-2">
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
