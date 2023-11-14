import { useContext } from "react";
import { Context } from "../../../context/ContextProv";
import "../../../css/settings/_variables.css";

const css = (isBegin: boolean) => {
  return {
    width: "100%",
    height: "140px",
    display: "grid",
    placeItems: "center",
    border: isBegin
      ? "0.5px solid var(--clr-transparent)"
      : "0.5px solid var(--clr-primary)",
  };
};

const BeginHeadingContainer = () => {
  const { isBegin } = useContext(Context);

  return <div style={css(isBegin)}></div>;
};

export default BeginHeadingContainer;
