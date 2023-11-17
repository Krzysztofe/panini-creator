import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  isInputPrint: { chease: boolean; meat: boolean };
  setInputPrint: React.Dispatch<
    React.SetStateAction<{
      chease: boolean;
      meat: boolean;
    }>
  >;
};

export const ContextForm = createContext<ContextType>({} as ContextType);

const ContextFormProv = (props: Props) => {
  const [isInputPrint, setInputPrint] = useState({ chease: true, meat: true });
  const [addChease,se] = useState()

  return (
    <ContextForm.Provider
      value={{
        isInputPrint,
        setInputPrint,
      }}
    >
      {props.children}
    </ContextForm.Provider>
  );
};

export default ContextFormProv;
