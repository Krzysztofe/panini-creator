import { useContext, useState } from "react";
import { ContextForm } from "../../context/ContextFormProv";
import styles from "./IconSwitch.module.css";

type Props = {
  name: string;
};

const IconSwitch = (props: Props) => {
  const { isInputPrint, setInputPrint } = useContext(ContextForm);

  const name = isInputPrint[props.name as keyof typeof isInputPrint];

  const rec_X = name ? "14" : "4";
  const recFill = name ? "black" : "white";

  const handlePrint = () => {
    setInputPrint(prev => ({
      ...prev,
      [props.name]: !prev[props.name as keyof typeof isInputPrint],
    }));
  };

  return (
    <div onClick={handlePrint} className={styles.iconSwitch}>
      <svg
        width="27"
        height="17"
        viewBox="0 0 27 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(-5, 0)"
      >
        <g id="Switch">
          <rect
            id="Rectangle 870"
            x="0.25"
            y="0.25"
            width="26.5"
            height="16.5"
            rx="8.25"
            fill="#FBFBFB"
            stroke="black"
            strokeWidth="0.5"
          />
          <rect
            id="Rectangle 869"
            x={rec_X}
            y="4"
            width="9"
            height="9"
            rx="4.5"
            fill={recFill}
            stroke="black"
            strokeWidth="0.5"
            style={{ transition: "all 0.3s ease" }}
          />
        </g>
      </svg>
    </div>
  );
};

export default IconSwitch;
