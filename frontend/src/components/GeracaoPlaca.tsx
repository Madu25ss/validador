import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Accordion from "./Accordion";
import { useGeraPlaca } from "../hooks/useCriaPlaca";
import { useGeradorStore } from "../store/storeGeraPlaca";

const GeradorPlaca = () => {
  const {
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useGeradorStore();

  const { mutate } = useGeraPlaca();

  const geraPlaca = async () => {
    SetNaoExibir(true);

    mutate(
      { points: true, state: "random", make: "random", year: "random" },
      {
        onSuccess: (dados) => {
          const geraJson = [`Placa: ${dados.data.plate}`];

          setRetornoJson(geraJson);
          SetNaoExibir(false);
          setResultado(true);
          setSucesso(true);
        },
        onError: () => {
          SetNaoExibir(true);
          setResultado(true);
          setSucesso(true);
        },
      }
    );
  };

  return (
    <>
      <TextoDesc
        text={`Clique em "Gerar Placa" para gerar uma Placa válida.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraPlaca} name={`Gerar Placa`} />
          </div>
          <div className=" flex flex-col w-full max-w-70 h-full">
            <Accordion disabled={naoExibir} textInfos={retornoJson} />
          </div>
        </div>
      </div>
      <TextoLink name={"Validar Placa"} path={"/"} />
    </>
  );
};

export default GeradorPlaca;
