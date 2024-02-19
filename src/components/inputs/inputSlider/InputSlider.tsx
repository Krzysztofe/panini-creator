import { ReactNode, useState } from "react";
import ArrowLeft from "../../../img/ArrowLeft";
import ArrowRight from "../../../img/ArrowRight";
import styles from "./InputSlider.module.css";

type Props = {
  variants: string[];
  icons?: ReactNode[];
};

const InputSlider = (props: Props) => {
  const [counter, setCounter] = useState(0);

  const sliderLength = props.variants.length;

  const handleCounter = (direction: string) => {
    if (direction === "decrease" && counter > 0) {
      setCounter(prev => prev - 1);
    } else if (direction === "increase" && counter < sliderLength - 1) {
      setCounter(prev => prev + 1);
    }
    return;
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        onClick={() => handleCounter("decrease")}
        className={styles.sliderArrow}
      >
        <ArrowLeft />
      </div>
      <div style={{ width: "80%", overflow: "hidden" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${sliderLength}, 100%)`,
            transform: `translate(-${counter}00%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {props.variants.map((variant, idx) => {
            return (
              <div key={variant} className={styles.sliderCells}>
                {props.icons ? props.icons[idx] : <></>}
                {variant}
              </div>
            );
          })}
        </div>
      </div>
      <div
        onClick={() => handleCounter("increase")}
        className={styles.sliderArrow}
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default InputSlider;
