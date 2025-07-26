import Botao from "../Botao";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import Validacao from "../Validacao";
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
    setCarregando,
  } = useHooksStore();

  const { mutate } = useGeraCnpj();

  const geraCnpj = async () => {
    SetNaoExibir(true);
    setCarregando(true);

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
        onSettled: () => {
          setCarregando(false);
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
      <div className="flex flex-col space-x-10 w-full mb-1  h-14">
        <div className="flex flex-row w-full h-auto space-x-40 ">
          <div className="h-fit ">
            <Botao onClick={geraCnpj} name={`Gerar CNPJ`} width="22" />
          </div>
          <div className="h-full flex flex-col w-full max-w-70 justify-end">
            <Accordion
              disabled={naoExibir}
              textInfos={retornoJson}
              height="h-7"
            />
          </div>
        </div>
        <div>
          <Validacao validacao={undefined} />
        </div>
      </div>
      <TextoLink name={"Validar CNPJ"} path={"/1"} onClick={resetHooks} />
    </>
  );
};

export default GeradorCnpj;
