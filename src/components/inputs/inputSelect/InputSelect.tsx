import { useState } from "react";
import BottomArrow from "../../../img/BottomArrow";
import styles from "./InputSelect.module.css";

type Props = {
  variants: string[];
};

const InputSelect = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(state => !state);
  };

  return (
    <div className={styles.selectContainer}>
      <div onClick={handleOpen} className={styles.select}>
        {props.variants[0]}
        <div
          className={styles.arrow}
          style={isOpen ? { transform: "rotate(180deg)" } : null}
        >
          <BottomArrow />
        </div>
      </div>

      {isOpen && (
        <>
          {props.variants.slice(1).map((value, idx) => {
            return (
              <div
                key={value}
                className={styles.select}
                style={{ borderTop: "0" }}
                onClick={() => {
                  // props.handleChange(props.inputName, value);
                  handleOpen();
                }}
              >
                {value}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default InputSelect;
