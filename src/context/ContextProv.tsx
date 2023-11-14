import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};
type ContextType = {
  isBegin: boolean;
  setBegin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Context = createContext<ContextType>({} as ContextType);

const ContextProv = (props:Props) => {
  const [isBegin, setBegin] = useState(false);

  return (
    <Context.Provider
      value={{
        isBegin,
        setBegin,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProv;
