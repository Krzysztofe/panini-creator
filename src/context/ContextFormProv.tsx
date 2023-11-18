import React, { createContext, useState } from "react";
import InputSelect from "../components/inputs/inputSelect/InputSelect";
import { cheeseVariants } from "../data/cheese";
import { meatVariants } from "../data/meat";
import DeleteButton from "../pages/form/deleteButton/DeleteButton";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  isInputPrint: { chease: boolean; meat: boolean; dressing: boolean };
  setInputPrint: React.Dispatch<
    React.SetStateAction<{
      chease: boolean;
      meat: boolean;
      dressing: boolean;
    }>
  >;
  newInputs: {
    chease: JSX.Element[];
    meat: JSX.Element[];
    dressing: JSX.Element[];
  };
  setNewInputs: React.Dispatch<
    React.SetStateAction<{
      chease: JSX.Element[];
      meat: JSX.Element[];
      dressing: JSX.Element[];
    }>
  >;
};

export const ContextForm = createContext<ContextType>({} as ContextType);


const ContextFormProv = (props: Props) => {
  const [isInputPrint, setInputPrint] = useState({
    chease: true,
    meat: true,
    dressing: true,
  });

  const [newInputs, setNewInputs] = useState({
    chease: [] as JSX.Element[],
    meat: [] as JSX.Element[],
    dressing: [] as JSX.Element[],
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
