import styles from "./InputCheckbox.module.css";

type Props = {
  value: string;
};

const InputCheckbox = (props: Props) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.checkboxStyle}>{props.value}</div>
    </label>
  );
};

export default InputCheckbox;
