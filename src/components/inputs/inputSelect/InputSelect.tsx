import { useState } from "react";
import ArrowBottom from "../../../img/ArrowBottom";
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
          <ArrowBottom />
        </div>
      </div>

      {isOpen && (
        <>
          {props.variants.slice(1).map(value => {
            return (
              <div
                key={value}
                onClick={() => {
                  // props.handleChange(props.inputName, value);
                  handleOpen();
                }}
                className={[styles.select, styles.selectDropdown].join(" ")}
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
