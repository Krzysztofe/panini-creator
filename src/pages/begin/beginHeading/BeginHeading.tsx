import React, { useState } from "react";
import styles from "./BeginHeading.module.css";

const BeginHeading = () => {
  const [isBegin, setBegin] = useState(false);

  const handleBegin = () => {
    setBegin(true);
  };

  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.header}>Panini Creator</h1>
      <button
        style={{ paddingInline: "20px", paddingBlock: "14px" }}
        onClick={handleBegin}
      >
        BEGIN
      </button>
    </div>
  );
};

export default BeginHeading;
