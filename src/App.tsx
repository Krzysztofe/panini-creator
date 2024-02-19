import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProv from "./context/ContextProv";
import ContextFormProv from "./context/ContextFormProv";
const LoadingPage = lazy(() => import("./pages/loadingPage/LoadingPage"));
const IndexBegin = lazy(() => import("./pages/begin/indexBegin/IndexBegin"));
const IndexForm = lazy(() => import("./pages/form/indexForm/IndexForm"));

const IndexSucces = lazy(() => import("./pages/success/IndexSucces"));
function App() {
  return (
    <BrowserRouter basename="/panini">
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
            <Route
              path="/success"
              element={
                <ContextProv>
                  <IndexSucces />
                </ContextProv>
              }
            />
            <Route
              path="/*"
              element={
                <ContextProv>
                  <IndexBegin />
                </ContextProv>
              }
            />
          </Routes>
        </ContextFormProv>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
