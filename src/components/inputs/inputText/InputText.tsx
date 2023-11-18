import React from 'react';
import styles from "./InputText.module.css"


const InputText = () => {
    return (
      <input
        type="text"
        placeholder="eg. Club Panini"
        className={styles.inputText}
      />
    );
};

export default InputText;