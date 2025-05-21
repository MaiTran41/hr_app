import styles from "./Header.module.css";
import { NavLink } from "react-router";

const Header = ({ logo }) => {
  const getLinkClassname = ({ isActive }) => {
    return isActive ? `${styles.navLinks} ${styles.active}` : styles.navLinks;
  };

  return (
    <>
      <header>
        <div>
          <NavLink className={styles.logo} to="/">
            <h1>{logo}</h1>
          </NavLink>
        </div>

        <nav>
          <ul className={styles.navBarHeader}>
            <NavLink to="/" className={getLinkClassname}>
              Person List
            </NavLink>
            <NavLink to="/about" className={getLinkClassname}>
              About
            </NavLink>
            <NavLink to="/add" className={getLinkClassname}>
              Add Employee
            </NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
