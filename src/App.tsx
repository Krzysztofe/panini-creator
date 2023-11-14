import React from "react";
import ContextProv from "./context/ContextProv";
import "./App.css";
import IndexBegin from "./pages/begin/indexBegin/IndexBegin";

function App() {
  return (
    <ContextProv>
      <IndexBegin />
    </ContextProv>
  );
}

export default App;
