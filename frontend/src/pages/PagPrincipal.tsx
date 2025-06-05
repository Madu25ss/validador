import React from "react";
import TesteComponente from "./TesteComponente";

const PagPrincipal = () => {
  return (
    <>
      <div className="flex flex-col bg-stone-100 h-screen px-24 py-8">
        <h1 className="mt-4 mb-4 text-3xl font-light text-center text-zinc-600">
          Validador
        </h1>
        <main className="mt-8">
          <TesteComponente />
        </main>
      </div>
    </>
  );
};

export default PagPrincipal;
