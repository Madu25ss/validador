import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Accordion from "./Accordion";
import { useGeradorStore } from "../store/useGeraCnh";
import { useGeraCnh } from "../hooks/useApiCriaCnh";

const GeradorCnh = () => {
  const {
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useGeradorStore();

  const { mutate } = useGeraCnh();

  const geraCnh = async () => {
    SetNaoExibir(true);

    mutate(
      { points: "true", allInformation: "false"},
      {
        onSuccess: (dados) => {
          const geraJson = [`CNH: ${dados.dataCnh}`];
        

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
      <TextoDesc text={`Clique em "Gerar CNH" para gerar um CNH válido.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraCnh} name={`Gerar CNH`} />
          </div>
          <div className=" flex flex-col w-full max-w-70 h-full">
            <Accordion disabled={naoExibir} textInfos={retornoJson} />
          </div>
        </div>
      </div>
      <TextoLink name={"Validar CNH"} path={"/"} />
    </>
  );
};

export default GeradorCnh;
