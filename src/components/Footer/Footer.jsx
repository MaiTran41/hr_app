import { NavLink } from "react-router";
import styles from "../Footer/Footer.module.css";

const Footer = ({ year }) => {
  const getLinkClassname = ({ isActive }) => {
    return isActive ? `${styles.navLinks} ${styles.active}` : styles.navLinks;
  };

  return (
    <>
      <footer className={styles.footerContainer}>
        <p>Copyright© Mai Tran {year}</p>

        <nav className={styles.navBarContainer}>
          <ul className={styles.navBarFooter}>
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
      </footer>
    </>
  );
};

export default Footer;
