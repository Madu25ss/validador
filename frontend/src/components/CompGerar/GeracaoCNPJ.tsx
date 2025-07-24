import { useState } from "react";
import Botao from "../Botao";
import Input from "../Input";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import { useHooksStore } from "../../store/storeHooks";
import { useGeraCnpj } from "../../hooks/hooksGeracao/useApiCriaCnpj";

const GeradorCnpj = () => {
  const {
    setCnpj,
    setValidaInput,
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useHooksStore();

  const { mutate } = useGeraCnpj();

  const geraCnpj = async () => {
    SetNaoExibir(true);

    mutate(
      { points: "true" },
      {
        onSuccess: (dados) => {
          const geraJson = [`CNPJ: ${dados.dataCnpj}`];
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

  const resetHooks = () => {
    setResultado(undefined);
    setCnpj("");
    setValidaInput(undefined);
    SetNaoExibir(undefined);
    setRetornoJson([""]);
  };

  return (
    <>
      <TextoDesc text={`Clique em "Gerar CNPJ" para gerar um CNPJ válido.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraCnpj} name={`Gerar CNPJ`} />
          </div>
          <div className=" flex flex-col w-full max-w-70 h-full">
            <Accordion disabled={naoExibir} textInfos={retornoJson} />
          </div>
        </div>
      </div>
      <TextoLink
        name={"Validar CNPJ"}
        path={"/validador/1"}
        onClick={resetHooks}
      />
    </>
  );
};

export default GeradorCnpj;
