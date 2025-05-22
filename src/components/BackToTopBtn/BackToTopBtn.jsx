import { useState, useEffect } from "react";
import styles from "./BackToTopBtn.module.css";

const BackToTopBtn = ({ threshold = 200, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.backToTop} ${
        isVisible ? styles.show : ""
      } ${className}`}
      onClick={scrollToTop}
      title="Back to top"
      aria-label="Scroll back to top"
    >
      ↑
    </button>
  );
};

export default BackToTopBtn;
