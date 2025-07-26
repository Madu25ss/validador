import Botao from "../Botao";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import Validacao from "../Validacao";
import { useHooksStore } from "../../store/storeHooks";
import { useGeraCnh } from "../../hooks/hooksGeracao/useApiCriaCnh";

const GeradorCnh = () => {
  const {
    setCnh,
    setValidaInput,
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
    setCarregando,
  } = useHooksStore();

  const { mutate } = useGeraCnh();

  const geraCnh = async () => {
    SetNaoExibir(true);
    setCarregando(true);

    mutate(
      { points: "true", allInformation: "false" },
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
        onSettled: () => {
          setCarregando(false);
        },
      }
    );
  };

  const resetHooks = () => {
    setResultado(undefined);
    setCnh("");
    setValidaInput(undefined);
    SetNaoExibir(undefined);
    setRetornoJson([""]);
  };

  return (
    <>
      <TextoDesc text={`Clique em "Gerar CNH" para gerar um CNH válido.`} />
      <div className="flex flex-col space-x-10 w-full mb-1  h-14">
        
        <div className="flex flex-row w-full h-auto space-x-40 ">
          
          <div className="h-fit ">
            <Botao onClick={geraCnh} name={`Gerar CNH`} width="22" />
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
      <TextoLink name={"Validar CNH"} path={"/2"} onClick={resetHooks} />
    </>
  );
};

export default GeradorCnh;
