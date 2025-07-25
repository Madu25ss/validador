import React from "react";
import TabMuiComponentGerar from "../components/CompGerar/TabMuiComponentGerar";

const PagGerador = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-200 px-6 py-8 w-screen items-center-safe">
        <div
          className="
        w-full
         sm:min-w-3xl 
         xl: max-w-6xl"
        >
          <h1 className="text-2xl font-light text-left text-zinc-600">
            Gerador
          </h1>
          <main className="mt-2">
            <TabMuiComponentGerar />
          </main>
        </div>
      </div>
    </>
  );
};

export default PagGerador;
