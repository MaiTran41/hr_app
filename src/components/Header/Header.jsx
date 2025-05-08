import "./Header.css";
import { NavLink } from "react-router";

const Header = ({ logo }) => {
  return (
    <>
      <header>
        <div>
          <NavLink id="logo" to="/">
            <h1>{logo}</h1>
          </NavLink>
        </div>

        <nav>
          <ul id="nav-bar-header">
            <NavLink to="/" className="nav-links">
              Person List
            </NavLink>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
            <NavLink to="/add" className="nav-links">
              Add Employee
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
