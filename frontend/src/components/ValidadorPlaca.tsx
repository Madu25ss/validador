import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";
import Accordion from "./Accordion";
import { useValidadorStore } from "../store/storePlaca";
import { useValidaPlaca } from "../hooks/useApiPlaca";

const ValidadorPlaca = () => {
  const {
    placa,
    setPlaca,
    resultado,
    setResultado,
    sucesso,
    setSucesso,
    validaInput,
    setValidaInput,
    naoExibir,
    SetNaoExibir,
    retornoJson,
    setRetornoJson,
  } = useValidadorStore();

  const { mutate } = useValidaPlaca();

  const validaPlaca = () => {
    console.log(placa);
    // || placa.length < 7
    if (!placa) {
      setValidaInput(false);
      setResultado(false);
      SetNaoExibir(true);
      setSucesso(false);
    } else {
      setValidaInput(true);
      mutate(
        { placa },
        {
          onSuccess: (dados) => {
            const geraJson = [`Placa: ${dados.data.value}`];
            setRetornoJson(geraJson);
            SetNaoExibir(false);
            setResultado(true);
            setSucesso(true);
          },
          onError: () => {
            SetNaoExibir(true);
            setResultado(false);
            setSucesso(false);
          },
        }
      );
    }
  };

  return (
    <>
      <TextoDesc
        text={`Digite a Placa do veículo e clique em "Enviar" para verificar se ela é válida ou não.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start mb-2">
            <Input
              name={"Placa"}
              value={placa}
              onChange={(text: string) => setPlaca(text)}
              maxLength={8} //sem máscara
              placeholder="Digite a Placa"
              widthValue={100}
              validacao={resultado}
              obrigatorio={true}
              inputVazio={validaInput}
            />
          </div>
          <div>
            <Validacao validacao={resultado} />
          </div>

          <div>
            <Botao onClick={validaPlaca} name={`Enviar`} />
          </div>
        </div>

        <div className=" flex flex-col w-full max-w-70 mt-4.5 ">
          <Accordion disabled={naoExibir} textInfos={retornoJson} />
        </div>
      </div>
      <TextoLink name={"Gerar PLACA"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorPlaca;
