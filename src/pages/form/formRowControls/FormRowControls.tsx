import React, { ReactNode } from 'react';
import styles from "./FormRowControls.module.css"

type Props = {
    children: ReactNode
}

const FormRowControls = (props:Props) => {
    return (
        <div className={styles.formRowConstrols}>
            {props.children}
        </div>
    );
};

export default FormRowControls;