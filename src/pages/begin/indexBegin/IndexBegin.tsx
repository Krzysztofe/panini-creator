import { useContext } from "react";
import Circle from "../../../components/circle/Circle";
import BeginHeading from "../beginHeading/BeginHeading";
import BeginHeadingContainer from "../beginHeadingContainer/BeginHeadingContainer";
import styles from "./IndexBegin.module.css";
import { Context } from "../../../context/ContextProv";
import { dataCircles } from "../../../components/circle/dataCircles";

const css = (isBegin: boolean) => {
  return {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    animation: isBegin ? `${styles.opacity} 3s forwards` : null,
  };
};

const IndexBegin = () => {
  const { isBegin } = useContext(Context);

  return (
    <main style={css(isBegin)}>
      <BeginHeading />

      {dataCircles.map(({ width, translate, keyFrames }, idx) => {
        return (
          <Circle
            key={keyFrames.name}
            width={width}
            translate={translate}
            keyFrames={keyFrames}
          >
            {keyFrames.name === "center" ? <BeginHeadingContainer /> : <></>}
          </Circle>
        );
      })}
    </main>
  );
};

export default IndexBegin;
