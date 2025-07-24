import React from "react";
import TabMuiComponent from "../components/CompValidar/TabMuiComponent";

const PagPrincipal = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-200 h-screen px-24 py-8">
        <h1 className="text-2xl font-light text-left text-zinc-600">
          Validador
        </h1>
        <main className="mt-2">
          <TabMuiComponent />
        </main>
      </div>
    </>
  );
};

export default PagPrincipal;
