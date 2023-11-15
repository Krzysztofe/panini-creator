import React from "react";
import styles from "./FormHeader.module.css";

const FormHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.header__container}`}>
        <h2 className={styles.heading}>Panini Creator</h2>
        <button>Randomize Panini</button>
      </div>
    </header>
  );
};

export default FormHeader;
