import React from "react";
import ContextProv from "./context/ContextProv";
import IndexBegin from "./pages/begin/indexBegin/IndexBegin";
import LoadingPage from "./pages/loadingPage/LoadingPage";

function App() {
  return (
    <ContextProv>
      {/* <IndexBegin /> */}
      <LoadingPage />
    </ContextProv>
  );
}

export default App;
