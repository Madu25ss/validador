import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";
import Accordion from "./Accordion";
import { useValidadorStore } from "../store/store.Cnpj";
import { useValidaCnpj } from "../hooks/useApiCNPJ";

const ValidadorRenavam = () => {
  const {
    cnpj,
    setCnpj,
    resultado,
    setResultado,
    setSucesso,
    validaInput,
    setValidaInput,
    naoExibir,
    SetNaoExibir,
    retornoJson,
    setRetornoJson,
  } = useValidadorStore();

  const { mutate } = useValidaCnpj();

  const validaRenav = () => {
    if (!cnpj) {
      setValidaInput(false);
      setResultado(false);
      SetNaoExibir(true);
    } else {
      setValidaInput(true);
      mutate(
        { cnpj: cnpj },
        {
          onSuccess: (dados) => {
            const geraJson = [
              `Razão Social: ${dados.data.razaoSocial} \n`,
              `Nome Fantasia: ${dados.data.nomeFantasia} \n`,
              `Natureza Jurídica: ${dados.data.naturezaJuridica} \n`,
              `Situação Cadastral: ${dados.data.descricaoSituacaoCadastral} \n`,
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
  // razaoSocial: string;
  //   nomeFantasia: string;
  //   naturezaJuridica: string;
  //   DescricaoSituacaoCadastral: string;
  return (
    <>
      <TextoDesc text={`Digite o CNPJ e clique em "Enviar" para verificar se ele é válido ou falso.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start mb-2">
            <Input
              name={"RENAVAM"}
              value={cnpj}
              onChange={(text: string) => setCnpj(text)}
              maxLength={14} //sem máscara
              placeholder="Digite o RENAVAM"
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
            <Botao onClick={validaRenav} name={`Enviar`}/>
          </div>
        </div>

        <div className=" flex flex-col w-full max-w-70 mt-4.5 ">
          <Accordion disabled={naoExibir} textInfos={retornoJson} />
        </div>
      </div>
      <TextoLink name={"Gerar RENAVAM"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorRenavam;
