import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  isBegin: boolean;
  setBegin: React.Dispatch<React.SetStateAction<boolean>>;
  isInputPrint: boolean;
  setInputPrint: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<ContextType>({} as ContextType);

const ContextProv = (props: Props) => {
  const [isBegin, setBegin] = useState(false);
  const [isInputPrint, setInputPrint] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/") setBegin(false);
  }, [pathname]);

  return (
    <Context.Provider
      value={{
        isBegin,
        setBegin,
        isInputPrint,
        setInputPrint,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProv;
