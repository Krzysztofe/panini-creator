import React from 'react';
import styles from "./InputRadio.module.css"

type Props = {
  name: string;
};

const InputRadio = (props:Props) => {
    return (
      <div className={styles.radioContainer}>

     
        <input
          type="radio"
        //   name={props.name}
        //   value={props.value}
        //   checked={props.checked}
        //   onChange={props.handleChange}
        //   className={props.inuptClass}
        //   id={props.value}
        />
           <label htmlFor={""} className={styles.radioLabel}>
          {/* {props.label ? props.label : props.value} */}
          {props.name}
        </label>
      </div>
    );
};

export default InputRadio;