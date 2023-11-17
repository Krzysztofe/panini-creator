import { ReactNode } from "react";
import styles from "./FormRowTitle.module.css";
type Props = {
  children?: ReactNode;
  title: string;
  titleOnTop?: boolean;
};

const FormRowTitle = (props: Props) => {
  return (
    <div className={styles.formRowTitle}>
      <h4
        className={
          (props.titleOnTop ? styles.titleOnTop : null)
        }
      >
        {props.title}
      </h4>
      {props.children}
    </div>
  );
};

export default FormRowTitle;
