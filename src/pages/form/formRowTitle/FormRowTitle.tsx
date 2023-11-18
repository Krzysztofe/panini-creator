import { ReactNode } from "react";
import styles from "./FormRowTitle.module.css";
type Props = {
  children?: ReactNode;
  title: string;
};

const FormRowTitle = (props: Props) => {
  return (
    <div className={styles.formRowTitle}>
      <h4
        className={
           styles.titleOnTop 
        }
      >
        {props.title.toUpperCase()}
      </h4>
      {props.children}
    </div>
  );
};

export default FormRowTitle;
