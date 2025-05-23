import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router";

const Header = ({ logo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClassname = ({ isActive }) => {
    return isActive ? `${styles.navLinks} ${styles.active}` : styles.navLinks;
  };

  const getMobileLinkClassname = ({ isActive }) => {
    return isActive
      ? `${styles.mobileNavLinks} ${styles.active}`
      : styles.mobileNavLinks;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 375) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let overflow = document.body.style.overflow;

    isMobileMenuOpen ? (overflow = "hidden") : (overflow = "unset");

    return () => {
      overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header>
        <div>
          <NavLink className={styles.logo} to="/" onClick={closeMobileMenu}>
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

        <button
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className={`${styles.mobileNavOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={closeMobileMenu}
      ></div>

      <nav
        className={`${styles.mobileNavMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <ul className={styles.mobileNavHeader}>
          <li>
            <NavLink
              to="/"
              className={getMobileLinkClassname}
              onClick={closeMobileMenu}
            >
              Person List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={getMobileLinkClassname}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={getMobileLinkClassname}
              onClick={closeMobileMenu}
            >
              Add Employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
