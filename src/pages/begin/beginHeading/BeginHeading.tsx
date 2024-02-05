import { useContext } from "react";
import { Context } from "../../../context/ContextProv";
import styles from "./BeginHeading.module.css";
import { Link, useNavigate } from "react-router-dom";

const BeginHeading = () => {
  const { setBegin } = useContext(Context);
  const navigate = useNavigate();
  const { beginHeader } = useContext(Context);

  const handleNavigate = () => {

    if (beginHeader.btn === "succes")
      setTimeout(() => {
        navigate("/form");
      }, 3000);
  };
const xxx= "ppp"

  const handleBegin = () => {
    setBegin(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.header}>{beginHeader.header}</h1>
      <button
    
        onClick={ handleNavigate}
        className={styles.button}
      >
        {beginHeader.btn}
      </button>
    </div>
  );
};

export default BeginHeading;
