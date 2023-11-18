import styles from "./FormSubmitButtons.module.css";

const FormSubmitButtons = () => {
    return (
      <div className={styles.buttonsContainer}>
        <button className={styles.button}><div className={styles.buttonTop}>PLACE ORDER</div></button>
        <button className={[styles.button, styles.buttonBottom].join(" ")}>START AGAIN</button>
      </div>
    );
};

export default FormSubmitButtons;