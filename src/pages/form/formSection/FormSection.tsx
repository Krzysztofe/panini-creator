import { ReactNode } from "react";
import styles from "./FormSection.module.css";

type Props = {
  children: ReactNode;
  heading: string;
};

const FormSection = (props: Props) => {
  const paddngOrderSection = props.heading.toLowerCase() === "finalize order";
  const wrapperStyle = paddngOrderSection ? { paddingBottom: 26 } : {};

  return (
    <div className="wrapperFormSection" style={wrapperStyle}>
      <h3 className={styles.heading}>{props.heading}</h3>
      {props.children}
    </div>
  );
};

export default FormSection;
