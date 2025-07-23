import ValidadorCpf from "./components/CompValidar/ValidadorCpf";
import TesteComponente from "./components/CompGerar/TabMuiComponent";
import PagPrincipal from "./pages/PagPrincipal";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PagGerador from "./pages/PagGerador";
import Root from "./routes/Root";
import { Children } from "react";

function App() {
  return (
    <>
      {/* <PagPrincipal /> */}
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<PagPrincipal />}>
            <Route path="validador/:tabIndex" element={<PagPrincipal />} />
          </Route>
          <Route path="/PagGerador" element={<PagGerador />}>
            <Route path=":tabIndex" element={<PagGerador />} />
          </Route>
          <Route path="*" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
