import PagPrincipal from "./pages/PagPrincipal";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import PagGerador from "./pages/PagGerador";
import Root from "./routes/Root";
import { router } from "./routes/Routes";


function App() {
  return <RouterProvider router={router}/>
}

export default App;
