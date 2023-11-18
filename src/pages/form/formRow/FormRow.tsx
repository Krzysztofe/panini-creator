import { ReactNode } from "react";
import styles from "./FormRow.module.css";

type Props = {
  children: ReactNode;
};

const FormRow = (props: Props) => {
  return <div className={styles.row}>{props.children}</div>;
};

export default FormRow;
