import React from "react";
import TabMuiComponent from "../components/CompValidar/TabMuiComponent";

const PagPrincipal = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-200 px-6 py-8 w-screen items-center-safe">
        <div
          className="
        w-full
         sm: min-w-1xl 
         xl: max-w-6xl"
        >
          <h1 className="text-2xl font-light text-left text-zinc-600">
            Validador
          </h1>
          <main className="mt-2">
            <TabMuiComponent />
          </main>
        </div>
      </div>
    </>
  );
};

export default PagPrincipal;
