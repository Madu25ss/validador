import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";
import Accordion from "./Accordion";
import { useValidaCpf } from "../hooks/useApiCpf";
import { useValidacaoInputCpf } from "../helper/helperValidaCpf";
import { useValidadorStore } from "../store/storeCpf";

const ValidadorCpf = () => {
  const {
    cpf,
    setCpf,
    dataNascimento,
    setNascimento,
    resultado,
    setResultado,
    validaInput,
    setValidaInput,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    sucesso,
    setSucesso,
  } = useValidadorStore();

  const { mutate } = useValidaCpf();
  const validarCpfHelper = useValidacaoInputCpf();

  const validaCpf = async () => {
    if (!cpf) {
      setValidaInput(false);
      setResultado(false);
    } else {
      setValidaInput(true);
    }

    if (!dataNascimento) {
      const resultadoViaHelper = validarCpfHelper(cpf);
      setResultado(resultadoViaHelper);
      SetNaoExibir(true);
    } else {
      mutate(
        { cpf, nascimento: dataNascimento },
        {
          onSuccess: (dados) => {
            const geraJson = [
              `Nome: ${dados.data.nome} \n`,
              `Nascimento: ${dados.data.nascimento} \n`,
              `CPF: ${dados.data.cpf} \n`,
              `Situação: ${dados.data.situacao} \n`,
            ];

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
      <TextoDesc text={`Digite o CPF e clique em "Enviar" para verificar se ele é válido ou falso.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start mb-2">
            <Input
              name={"CPF"}
              value={cpf}
              onChange={(text: string) => setCpf(text)}
              maxLength={11} //sem máscara
              placeholder="Digite o CPF"
              widthValue={100}
              validacao={resultado}
              obrigatorio={true}
              inputVazio={validaInput}
            />

            <Input
              name={"Data  de Nascimento"}
              value={dataNascimento}
              onChange={(text: string) => setNascimento(text)}
              maxLength={8} // 8 sem a máscara
              placeholder="DD/MM/YYYY"
              widthValue={100}
            />
          </div>

          <div>
            <Validacao validacao={resultado} />
          </div>

          <div>
            <Botao onClick={validaCpf} name={`Enviar`}/>
          </div>
        </div>

        <div className=" flex flex-col w-full max-w-70 mt-4.5 ">
          <Accordion disabled={naoExibir} textInfos={retornoJson} />
        </div>
      </div>
      <TextoLink name={"Gerar CPF"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorCpf;
