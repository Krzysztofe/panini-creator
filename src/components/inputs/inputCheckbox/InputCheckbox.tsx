import React from 'react';
import styles from "./InputCheckbox.module.css"

type Props = {
    value: string
}

const InputCheckbox = (props:Props) => {
    return (
      <label className={styles.label}>
        <input
          type="checkbox"
          //   value={props.value}
          //   checked={props.checked}
          //   onChange={props.handleChange}
          className={styles.checkbox}
        />
        <div className={styles.checkboxStyle}>{props.value}</div>
      </label>
    );
};

export default InputCheckbox;