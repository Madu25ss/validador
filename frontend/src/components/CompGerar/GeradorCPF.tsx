import Botao from "../Botao";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import { useHooksStore } from "../../store/storeHooks";
import { useGeraCpf } from "../../hooks/hooksGeracao/useApiCriaCpf";

const GeradorCpf = () => {
  const {
    setCpf,
    setNascimento,
    setResultado,
    setValidaInput,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useHooksStore();

  const { mutate } = useGeraCpf();

  const geraCpf = async () => {
    SetNaoExibir(true);

    mutate(
      { points: "true", state: "random" },
      {
        onSuccess: (dados) => {
          const geraJson = [`CPF: ${dados.dataCpf}`];

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

  const resetHooks = async () => {
    setResultado(undefined);
    setCpf("");
    setNascimento("");
    setValidaInput(undefined);
    SetNaoExibir(undefined);
    setRetornoJson([""]);
  };

  return (
    <>
      <TextoDesc text={`Clique em "Gerar CPF" para gerar um CPF válido.`} />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full h-auto space-x-40">
          <div className="h-fit">
            <Botao onClick={geraCpf} name={`Gerar CPF`} />
          </div>
          <div className="h-full flex flex-col w-full max-w-70 justify-end">
            <Accordion disabled={naoExibir} textInfos={retornoJson} height="h-7"/>
          </div>
        </div>
      </div>
      <TextoLink
        name={"Validar CPF"}
        path={"/0"}
        onClick={resetHooks}
      />
    </>
  );
};

export default GeradorCpf;
