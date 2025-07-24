import PagPrincipal from "./pages/PagPrincipal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagGerador from "./pages/PagGerador";
import Root from "./routes/Root";


function App() {
  return (
    <>
      {/* <PagPrincipal /> */}
      <BrowserRouter>
        <Routes>
          {/*Mapeamento das abas do Validador*/}
          <Route path={"/"} element={<PagPrincipal />}>
            <Route path="validador/:tabIndex" element={<PagPrincipal />} />
          </Route>

          {/*Mapeamento das abas do Gerador*/}
          <Route path="/PagGerador" element={<PagGerador />}>
            <Route path=":tabIndex" element={<PagGerador />} />
          </Route>

          {/*Mapeamento caso erro/página não encontrada*/}
          <Route path="*" element={<Root />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
