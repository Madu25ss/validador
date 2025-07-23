import { Outlet } from "react-router-dom"


const Root = () => {
  return (
  <div className="flex h-dvh bg-stone-200 font-[Roboto] py-8 px-16">
    <Outlet />
    <div>Página Não Encontrada</div>
  </div>
  )
}

export default Root