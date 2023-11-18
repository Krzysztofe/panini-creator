import React from 'react';
import styles from "./InputCheckboxWithLabel.module.css"

type Props = {
  name: string;
};


const InputCheckboxWithLabel = (props:Props) => {
    return (
     
        <label className={styles.label}>
          {props.name}
          <input
            type="checkbox"
            //   value={props.value}
            //   checked={props.checked}
            //   onChange={props.handleChange}
            className={styles.checkbox}
          />
        
          <div className={styles.checkboxStyle}></div>
        </label>
      
    );
};

export default InputCheckboxWithLabel;