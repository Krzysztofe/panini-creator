import React, { ReactNode } from "react";
import styles from "./FormRow.module.css";

type Props = {
  children: ReactNode;
  title: string;
  titleOnTop?: boolean;
};

const FormRow = (props: Props) => {
  return (
    <div className={styles.row}>
      <h4
        className={
          (props.titleOnTop ? styles.rowHeadingOnTop : null, styles.rowHeading)
        }
      >
        {props.title}
      </h4>
      {props.children}
    </div>
  );
};

export default FormRow;
