import styles from "./FormSubmitButtons.module.css";
import { NavLink } from "react-router-dom";

const FormSubmitButtons = () => {
  const handleButtonClick = () => {
    const sectionSecond = document.querySelector("body");
    if (sectionSecond) {
      sectionSecond.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <NavLink to="/success" className={styles.button}>
        <div className={styles.buttonTop}>PLACE ORDER</div>
      </NavLink>
      <button
        type="button"
        onClick={handleButtonClick}
        className={[styles.button, styles.buttonBottom].join(" ")}
      >
        START AGAIN
      </button>
    </div>
  );
};

export default FormSubmitButtons;
