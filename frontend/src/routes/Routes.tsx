import { createBrowserRouter, RouteObject } from "react-router-dom";
import PagPrincipal from "../pages/PagPrincipal";
import PagGerador from "../pages/PagGerador";
import Root from "./Root";
import TextoLink from "../components/TextLinklErro";

export const routes: RouteObject[] = [
  {
    index: true,
    element: <PagPrincipal />,
  },
  {
    path: ":tabIndex",
    element: <PagPrincipal />,
  },
  {
    path: "/PagGerador",
    element: <PagGerador />,
    children: [
      {
        path: ":tabIndex",
        element: <PagGerador />,
      },
    ],
  },
  {
    path: "/erro",
    element: <TextoLink name="Página Principal" path="/"/>,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>erro</p>,
    children: routes,
  },
]);
