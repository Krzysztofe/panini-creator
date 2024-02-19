import { useContext } from "react";
import { Context } from "../../../context/ContextProv";
import { Link, useNavigate } from "react-router-dom";
import styles from "./BeginHeading.module.css";

const BeginHeading = () => {
  const { setBegin } = useContext(Context);
  const navigate = useNavigate();
  const { beginHeader } = useContext(Context);

  // const handleNavigate = () => {

  //   console.log("", beginHeader.btn);
  //   if (beginHeader.btn === "succes")
  //     setTimeout(() => {
  //       navigate("/form");
  //     }, 3000);
  // };

  
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
      <h1 className={styles.header}>{beginHeader.header}</h1>
      <button
        onClick={() => {
          handleNavigate();
          handleBegin();
        }}
        className={styles.button}
      >
        {beginHeader.btn}
      </button>
    </div>
  );
};

export default BeginHeading;
