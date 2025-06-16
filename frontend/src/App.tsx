import ValidadorCpf from "./pages/ValidadorCpf"
import TesteComponente from "./pages/TesteComponente"
import PagPrincipal from "./pages/PagPrincipal"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import PagGerador from "./pages/PagGerador"

function App() {
  
  return (
    <>
    {/* <PagPrincipal /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagPrincipal />}/>
        <Route path="/PagGerador" element={<PagGerador />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
