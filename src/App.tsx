import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProv from "./context/ContextProv";
import ContextFormProv from "./context/ContextFormProv";
const LoadingPage = lazy(() => import("./pages/loadingPage/LoadingPage"));
const IndexBegin = lazy(() => import("./pages/begin/indexBegin/IndexBegin"));
const IndexForm = lazy(() => import("./pages/form/indexForm/IndexForm"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <ContextFormProv>
          <Routes>
            <Route
              path="/"
              element={
                <ContextProv>
                  <IndexBegin />
                </ContextProv>
              }
            />
            <Route path="/form" element={<IndexForm />} />
          </Routes>
        </ContextFormProv>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
