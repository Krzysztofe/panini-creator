import { ReactNode } from "react";
import styles from "./FormRowInputs.module.css"
type Props = {
  children: ReactNode;
};

const FormRowInputs = (props: Props) => {
  return <div className={styles.formRowInputs}>{props.children}</div>;
};

export default FormRowInputs;
