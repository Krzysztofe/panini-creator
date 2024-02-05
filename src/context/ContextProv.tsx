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
  beginHeader: {
    header: string;
    btn: string;
  };
  setBeginHeader: React.Dispatch<
    React.SetStateAction<{
      header: string;
      btn: string;
    }>
  >;
};

export const Context = createContext<ContextType>({} as ContextType);

const ContextProv = (props: Props) => {
  const [isBegin, setBegin] = useState(false);
  const [isInputPrint, setInputPrint] = useState(false);
  const { pathname } = useLocation();
  const [beginHeader, setBeginHeader] = useState({
    header: "Panini Creator",
    btn: "BEGIN",
  });

  useEffect(() => {
    if (pathname !== "/") setBegin(false);
    if (pathname === "/success") {
      setBeginHeader({
        ...beginHeader,
        header: "Panini Ordered",
        btn: "START AGAIN",
      });
    } else {
      setBeginHeader({ ...beginHeader });
    }
  }, [pathname]);

  return (
    <Context.Provider
      value={{
        isBegin,
        setBegin,
        isInputPrint,
        setInputPrint,
        beginHeader,
        setBeginHeader,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProv;
