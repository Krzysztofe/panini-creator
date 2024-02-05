import { useContext } from "react";
import BeginCircle from "../BeginCircle";
import BeginHeading from "../beginHeading/BeginHeading";
import BeginHeadingContainer from "../BeginHeadingContainer";
import styles from "./IndexBegin.module.css";
import { Context } from "../../../context/ContextProv";
import { dataCircles } from "./dataCircles";
import IndexForm from "../../form/indexForm/IndexForm";


const css = (isBegin: boolean) => {
  return {
    width: "100vw",
    height: "100vh",
    backgroundColor: "var(--clr-white)",
    position:"absolute",
    top:0,
    left:0,
     animation: isBegin ? `${styles.opacity} 3s forwards` : null,
  };
};

const IndexBegin = () => {
  const { isBegin } = useContext(Context);

  return (
    <main className={styles.main}>
      <IndexForm />
      <div style={css(isBegin)}>
        <BeginHeading />
        {dataCircles.map(({ width, translate, keyFrames }) => {
          return (
            <BeginCircle
              key={keyFrames.name}
              width={width}
              translate={translate}
              keyFrames={keyFrames}
            >
          
              {keyFrames.name === "center" ? <BeginHeadingContainer /> : <></>}
            </BeginCircle>
          );
        })}
      </div>
    </main>
  );
};

export default IndexBegin;
