import { Outlet } from "react-router-dom";
import TextoLinkErro from "../components/TextLinklErro"

const Root = () => {
  return (
    <div className="flex h-dvh bg-stone-200 font-[Roboto] py-8 px-16">
      <Outlet />
      <TextoLinkErro name={"Página Principal"} path="/" />
    </div>
  );
};

export default Root;
