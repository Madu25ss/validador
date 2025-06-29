import ValidadorCpf from "./components/ValidadorCpf";
import TesteComponente from "./components/TabMuiComponent";
import PagPrincipal from "./pages/PagPrincipal";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PagGerador from "./pages/PagGerador";

function App() {
  return (
    <>
      {/* <PagPrincipal /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagPrincipal />} />
          <Route path="/PagGerador" element={<PagGerador />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
