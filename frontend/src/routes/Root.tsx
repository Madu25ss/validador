import { Outlet } from "react-router-dom";
import TextoLinkErro from "../components/TextLinklErro"

const Root = () => {
  return (
    <div className="flex h-dvh bg-stone-200 ">
      <Outlet />
    </div>
  );
};

export default Root;
