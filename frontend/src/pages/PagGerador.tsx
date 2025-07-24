import React from "react";
import TabMuiComponentGerar from "../components/CompGerar/TabMuiComponentGerar";

const PagGerador = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-200 h-screen px-24 py-8">
        <h1 className="text-2xl font-light text-left text-zinc-600">Gerador</h1>
        <main className="mt-2">
          <TabMuiComponentGerar />
        </main>
      </div>
    </>
  );
};

export default PagGerador;
