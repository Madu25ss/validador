import Botao from "../Botao";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Accordion from "../Accordion";
import Validacao from "../Validacao";
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
    setCarregando,
  } = useHooksStore();

  const { mutate } = useGeraPlaca();

  const geraPlaca = async () => {
    SetNaoExibir(true);
    setCarregando(true);

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
        onSettled: () => {
          setCarregando(false);
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
      <div className="flex flex-col space-x-10 w-full mb-1  h-14">
        
        <div className="flex flex-row w-full h-auto space-x-40 ">
          
          <div className="h-fit ">
            <Botao onClick={geraPlaca} name={`Gerar Placa`} width="22" />
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
      <TextoLink name={"Validar Placa"} path={"/3"} onClick={resetHooks} />
    </>
  );
};

export default GeradorPlaca;
