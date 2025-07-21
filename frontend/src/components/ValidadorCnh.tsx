import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";
import { useValidaCnh } from "../hooks/useApiCnh";
import { useValidadorStore } from "../store/storeCnh";

const ValidadorCnh = () => {
  const {
    cnh,
    setCnh,
    resultado,
    setResultado,
    setSucesso,
    validaInput,
    setValidaInput,
    SetNaoExibir,
  } = useValidadorStore();

  const { mutate } = useValidaCnh();

  const validaCnh = () => {
    if (!cnh || (cnh.length < 11 )) {
      setValidaInput(false);
      setResultado(false);
    } else {
      setValidaInput(true);
      mutate(
        { cnh },
        { 
          onSuccess: () => {
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
      <TextoDesc text={`Digite o CNH e clique em "Enviar" para verificar se ele é válido ou falso.`}/>
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start mb-2">
            <Input
              name={"CNH"}
              value={cnh}
              onChange={(text: string) => setCnh(text)}
              maxLength={14} //sem máscara
              placeholder="Digite o CNH"
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
            <Botao onClick={validaCnh} name={`Enviar`}/>
            <TextoLink name={"Gerar CNH"} path={"/PagGerador"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidadorCnh;
