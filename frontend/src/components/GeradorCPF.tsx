import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";
import Accordion from "./Accordion";
import { useGeradorStore } from "../store/storeGeraCpf";

const GeradorCpf = () => {
  const {
    resultado,
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    sucesso,
    setSucesso,
  } = useGeradorStore();

  // const { mutate } = useValidaCpf();
  // const validarCpfHelper = useValidacaoInputCpf();

  const geraCpf = async () => {
    console.log("clicando");
    SetNaoExibir(false);

    const passaTexto = [`teste`];
    setRetornoJson(passaTexto);
  };
  //   if (!cpf) {
  //     setValidaInput(false);
  //     setResultado(false);
  //   } else {
  //     setValidaInput(true);
  //   }

  //   if (!dataNascimento) {
  //     const resultadoViaHelper = validarCpfHelper(cpf);
  //     setResultado(resultadoViaHelper);
  //     SetNaoExibir(true);
  //   } else {
  //     mutate(
  //       { cpf, nascimento: dataNascimento },
  //       {
  //         onSuccess: (dados) => {
  //           const geraJson = [
  //             `Nome: ${dados.data.nome} \n`,
  //             `Nascimento: ${dados.data.nascimento} \n`,
  //             `CPF: ${dados.data.cpf} \n`,
  //             `Situação: ${dados.data.situacao} \n`,
  //           ];

  //           setRetornoJson(geraJson);
  //           SetNaoExibir(false);
  //           setResultado(true);
  //           setSucesso(true);
  //         },
  //         onError: () => {
  //           SetNaoExibir(true);
  //           setResultado(false);
  //           setSucesso(false);
  //         },
  //       }
  //     );
  //   }
  // };
  return (
    <>
      <TextoDesc text={`Clique em "Gerar CPF" para gerar um CPF válido.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraCpf} name={`Gerar CPF`} />
          </div>
          <div className=" flex flex-col w-full max-w-70 h-full">
            <Accordion disabled={naoExibir} textInfos={retornoJson} />
          </div>
        </div>
      </div>
      <TextoLink name={"Validar CPF"} path={"/"} />
    </>
  );
};

export default GeradorCpf;
