import { useState } from "react";
import IconDices from "../../../img/IconDices";
import styles from "./FormHeader.module.css";

const FormHeader = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__container}`}>
        <h2 className={styles.heading}>Panini Creator</h2>
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.button}
        >
          <IconDices isHovered={isHovered} />
          Randomize Panini
        </button>
      </div>
    </header>
  );
};

export default FormHeader;
