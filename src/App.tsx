import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProv from "./context/ContextProv";
const LoadingPage = lazy(() => import("./pages/loadingPage/LoadingPage"));
const IndexBegin = lazy(() => import("./pages/begin/indexBegin/IndexBegin"));
const IndexForm = lazy(() => import("./pages/form/indexForm/IndexForm"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <ContextProv>
          <Routes>
            <Route path="/" element={<IndexBegin />} />
            <Route path="/form" element={<IndexForm />} />
          </Routes>
        </ContextProv>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
