import { useState } from "react";

type Props = {
  isHovered: boolean;
};

const IconDices = (props: Props) => {
  const rec_1_Position_X = props.isHovered ? "3.306186" : "0.306186";
  const rec_1_Position_Y = props.isHovered ? "3.0088" : "10.0088";

  const rec_2_Position_X = props.isHovered ? "11.306186" : "9.03905";
  const rec_2_Position_Y = props.isHovered ? "6.34829" : "0.34829";

  const circle_1_position_X = props.isHovered ? "10.5" : "11.5";
  const circle_1_position_Y = props.isHovered ? "11" : "4.5";

  const circle_2_position_X = props.isHovered ? "7" : "8.5";
  const circle_2_position_Y = props.isHovered ? "12" : "5.5";

  const circle_3_position_X = props.isHovered ? "5.5" : "4.5";
  const circle_3_position_Y = props.isHovered ? "4.5" : "12.5";

  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Dices">
        <rect
          id="Rectangle 867"
          x={rec_1_Position_X}
          y={rec_1_Position_Y}
          width="6.69963"
          height="6.69963"
          transform="rotate(-15 0.306186 10.0088)"
          fill="white"
          stroke="black"
          strokeWidth="0.5"
          style={{ transition: "all 0.3s ease" }}
        />
        <rect
          id="Rectangle 868"
          x={rec_2_Position_X}
          y={rec_2_Position_Y}
          width="6.69963"
          height="6.69963"
          transform="rotate(35.1014 9.03905 0.34829)"
          fill="white"
          stroke="black"
          strokeWidth="0.5"
          style={{ transition: "all 0.3s ease" }}
        />
        <circle
          id="Ellipse 8"
          cx={circle_1_position_X}
          cy={circle_1_position_Y}
          r="0.5"
          fill="black"
          style={{ transition: "all 0.3s ease" }}
        />
        <circle
          id="Ellipse 11"
          cx={circle_2_position_X}
          cy={circle_2_position_Y}
          r="0.5"
          fill="black"
          style={{ transition: "all 0.3s ease" }}
        />
        <circle
          id="Ellipse 13"
          cx={circle_3_position_X}
          cy={circle_3_position_Y}
          r="0.5"
          fill="black"
          style={{ transition: "all 0.3s ease" }}
        />
      </g>
    </svg>
  );
};

export default IconDices;
