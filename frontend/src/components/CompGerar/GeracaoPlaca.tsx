import Botao from "../Botao";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import { useGeraPlaca } from "../../hooks/hooksGeracao/useCriaPlaca";
import { useHooksStore } from "../../store/storeHooks";

const GeradorPlaca = () => {
  const {
    setPlaca,
    setValidaInput,
    setResultado,
    retornoJson,
    setRetornoJson,
    naoExibir,
    SetNaoExibir,
    setSucesso,
  } = useHooksStore();

  const { mutate } = useGeraPlaca();

  const geraPlaca = async () => {
    SetNaoExibir(true);

    mutate(
      { points: true, state: "random", make: "random", year: "random" },
      {
        onSuccess: (dados) => {
          const geraJson = [`Placa: ${dados.data.plate}`];

          setRetornoJson(geraJson);
          SetNaoExibir(false);
          setResultado(true);
          setSucesso(true);
        },
        onError: () => {
          SetNaoExibir(true);
          setResultado(true);
          setSucesso(true);
        },
      }
    );
  };

  const resetHooks = () => {
    setResultado(undefined);
    setPlaca("");
    setValidaInput(undefined);
    SetNaoExibir(undefined);
    setRetornoJson([""]);
  };

  return (
    <>
      <TextoDesc
        text={`Clique em "Gerar Placa" para gerar uma Placa válida.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-row w-full space-x-40">
          <div className="h-full">
            <Botao onClick={geraPlaca} name={`Gerar Placa`} />
          </div>

          <div className="h-fit flex flex-col w-full max-w-70">
            <Accordion disabled={naoExibir} textInfos={retornoJson} height="h-6.5"/>
          </div>
        </div>
      </div>
      <TextoLink
        name={"Validar Placa"}
        path={"/3"}
        onClick={resetHooks}
      />
    </>
  );
};

export default GeradorPlaca;
