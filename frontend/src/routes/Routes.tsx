import React from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import PagPrincipal from '../pages/PagPrincipal'
import PagGerador from '../pages/PagGerador'
import Root from './Root';



export const routes: RouteObject[] = [
  {
    index: true,
    element: <PagPrincipal/>,
  },
  {
    path: "/PagGerador",
    element: <PagGerador/>
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Erro</p>,
    children: routes,
  },
]);