import React, { ReactNode } from 'react';
import styles from "./FormSection.module.css"

type Props = {
    children: ReactNode
    heading: string
}

const FormSection = (props:Props) => {
    return (
      <div className="wrapperFormSection">
        <h3 className={styles.heading}>{props.heading}</h3>
        {props.children}
      </div>
    );
};

export default FormSection;