import { Outlet } from "react-router-dom"


const Root = () => {
  return (
  <div className="flex h-dvh bg-slate-100 font-[Roboto] py-8 px-16">
    <Outlet />
  </div>
  )
}

export default Root