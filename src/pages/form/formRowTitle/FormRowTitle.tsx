import { ReactNode } from "react";
import styles from "./FormRowTitle.module.css";
import IconSwitch from "../../../img/iconSwitch/IconSwitch";

type Props = {
  title: string;
  switch: boolean
}
const FormRowTitle = (props: Props) => {


  return (
    <div className={styles.formRowTitle}>
      <h4 className={styles.titleOnTop}>{props.title.toUpperCase()}</h4>
      {props.switch && <IconSwitch name={props.title} />}
    </div>
  );
};

export default FormRowTitle;
