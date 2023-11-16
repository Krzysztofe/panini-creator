import styles from "./IconSwitch.module.css"

const IconSwitch = () => {
  return (
    <div className={styles.iconSwitch}>
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
          x="4"
          y="4"
          width="9"
          height="9"
          rx="4.5"
          fill="white"
          stroke="black"
          strokeWidth="0.5"
        />
      </g>
    </svg>
    </div>
  );
};

export default IconSwitch;
