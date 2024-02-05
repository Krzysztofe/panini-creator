import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  isInputPrint: {
    chease: boolean;
    meat: boolean;
    dressing: boolean;
    egg: boolean;
  };
  setInputPrint: React.Dispatch<
    React.SetStateAction<{
      chease: boolean;
      meat: boolean;
      dressing: boolean;
      egg: boolean;
    }>
  >;
  newInputs: {
    chease: JSX.Element[];
    meat: JSX.Element[];
    dressing: JSX.Element[];
    egg: JSX.Element[];
  };
  setNewInputs: React.Dispatch<
    React.SetStateAction<{
      chease: JSX.Element[];
      meat: JSX.Element[];
      dressing: JSX.Element[];
      egg: JSX.Element[];
    }>
  >;
};

export const ContextForm = createContext<ContextType>({} as ContextType);


const ContextFormProv = (props: Props) => {
  const [isInputPrint, setInputPrint] = useState({
    chease: true,
    meat: true,
    dressing: true,
    egg:true
  });

  const [newInputs, setNewInputs] = useState({
    chease: [] as JSX.Element[],
    meat: [] as JSX.Element[],
    dressing: [] as JSX.Element[],
    egg: [] as JSX.Element[],
  });

  return (
    <ContextForm.Provider
      value={{
        isInputPrint,
        setInputPrint,
        newInputs,
        setNewInputs,
      }}
    >
      {props.children}
    </ContextForm.Provider>
  );
};

export default ContextFormProv;
