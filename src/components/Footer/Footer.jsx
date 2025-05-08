import "./Footer.css";
import { NavLink } from "react-router";

const Footer = ({ year }) => {
  return (
    <>
      <footer id="footer-container">
        <p>Copyright© Mai Tran {year}</p>

        <nav id="nav-bar-container">
          <ul id="nav-bar-footer">
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
      </footer>
    </>
  );
};

export default Footer;
