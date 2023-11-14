import { useContext } from "react";
import { Context } from "../../../context/ContextProv";
import styles from "./BeginHeading.module.css";

const BeginHeading = () => {
  const { setBegin } = useContext(Context);

  const handleBegin = () => {
    setBegin(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.header}>Panini Creator</h1>
      <button onClick={handleBegin} className={styles.button}>
        BEGIN
      </button>
    </div>
  );
};

export default BeginHeading;
