import React, { useContext } from "react";
import IndexBegin from "../begin/indexBegin/IndexBegin";
import { Context } from "../../context/ContextProv";

const IndexSucces = () => {
  const { beginHeader, setBeginHeader } = useContext(Context);

  return <IndexBegin />;
};

export default IndexSucces;
