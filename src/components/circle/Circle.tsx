import { ReactNode, useContext } from "react";
import { Context } from "../../context/ContextProv";

type Props = {
  children?: ReactNode;
  width: string;
  translate: string;
  keyFrames: { name: string; transformTo: string; scaleTo: string };
};

const css = (width: string, translate: string, name: any) => {
  return {
    width,
    height: width,
    position: "absolute",
    bottom: "50%",
    left: "50%",
    transform: translate,
    border: "0.5px solid var(--clr-primary)",
    borderRadius: "100%",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
    animation: `${name} 3s forwards cubic-bezier(0.76, 0, 1, 0.49)`,
  };
};

const generateKeyframes = (data: any) => {
  const { name, translateTo, scaleTo } = data;
  return `
    @keyframes ${name} {
      0% {}
      100% {
        transform: translate(${translateTo}) scale(${scaleTo});
      }
    }
  `;
};

const Circle = (props: Props) => {
  const { isBegin } = useContext(Context);
  const keyframes = generateKeyframes(props.keyFrames);

  return (
    <>
      <div style={css(props.width, props.translate, props.keyFrames.name)}>
        {props.children}
      </div>
      {isBegin ? <style>{keyframes}</style> : <style></style>}
    </>
  );
};

export default Circle;
