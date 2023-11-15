import { useContext } from "react";
import { Context } from "../../../context/ContextProv";
import styles from "./BeginHeading.module.css";
import { useNavigate } from "react-router-dom";

const BeginHeading = () => {
  const { setBegin } = useContext(Context);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setTimeout(() => {
      navigate("/form");
    }, 3000);
  };

  const handleBegin = () => {
    setBegin(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.header}>Panini Creator</h1>
      <button
        onClick={() => {
          handleBegin(), handleNavigate();
        }}
        className={styles.button}
      >
        BEGIN
      </button>
    </div>
  );
};

export default BeginHeading;
