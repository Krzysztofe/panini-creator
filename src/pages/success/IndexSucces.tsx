import React, {useContext} from "react";
import IndexBegin from "../begin/indexBegin/IndexBegin";
import { Context } from "../../context/ContextProv";

const IndexSucces = () => {

const {beginHeader, setBeginHeader} = useContext(Context)

console.log('',beginHeader)

  return <IndexBegin />;
};

export default IndexSucces;
