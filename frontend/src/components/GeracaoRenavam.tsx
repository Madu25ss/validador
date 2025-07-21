import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Accordion from "./Accordion";
import { useGeradorStore } from "../store/storeGeraRenavam";
import { useGeraRenavam } from "../hooks/useCriaRenavam";

const GeradorRenavam = () => {
  const {
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useGeradorStore();

  const { mutate } = useGeraRenavam();

  const geraRenavam = async () => {
    SetNaoExibir(true);

    mutate( undefined,
      {
        onSuccess: (dados) => {
          const geraJson = [`CNH: ${dados.dataRenavam}`];
        

          setRetornoJson(geraJson);
          SetNaoExibir(false);
          setResultado(true);
          setSucesso(true);
        },
        onError: () => {
          SetNaoExibir(true);
        },
      }
    );
  };

  return (
    <>
      <TextoDesc text={`Clique em "Gerar Placa" para gerar uma Placa de Veículo válida.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraRenavam} name={`Gerar Placa`} />
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

export default GeradorRenavam;
