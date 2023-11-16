import style from "./IconAddButton.module.css"

const IconAddButton = () => {
    return (
      <div className={style.iconAddButton}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Add">
          <rect
            id="Rectangle 870"
            x="0.25"
            y="0.25"
            width="16.5"
            height="16.5"
            rx="8.25"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            id="Line 34 (Stroke)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 12.5L8.25 4.5L8.75 4.5L8.75 12.5L8.25 12.5Z"
            fill="black"
          />
          <path
            id="Line 35 (Stroke)"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 8.75H4.5V8.25H12.5V8.75Z"
            fill="black"
          />
        </g>
      </svg>
      </div>
    );
};

export default IconAddButton;