import Botao from "../Botao";
import Input from "../Input";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Validacao from "../Validacao";
import Accordion from "../Accordion";
import { useHooksStore } from "../../store/storeHooks";
import { useValidaPlaca } from "../../hooks/hooksValidacao/useApiPlaca";

const ValidadorPlaca = () => {
  const {
    placa,
    setPlaca,
    resultado,
    setResultado,
    setSucesso,
    validaInput,
    setValidaInput,
    naoExibir,
    SetNaoExibir,
    retornoJson,
    setRetornoJson,
    setCarregando,
  } = useHooksStore();

  const { mutate } = useValidaPlaca();

  const validaPlaca = () => {
    if (!placa) {
      setValidaInput(false);
      setResultado(false);
      SetNaoExibir(true);
      setSucesso(false);
    } else {
      setValidaInput(true);
      setCarregando(true);
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
          onSettled: () => {
            setCarregando(false);
          },
        }
      );
    }
  };

  return (
    <>
      <TextoDesc
        text={`Digite a Placa do veículo e clique em "Enviar" para verificar se ela é Válida ou Inválida.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start">
            <Input
              name={"Placa"}
              value={placa}
              onChange={(text: string) => setPlaca(text)}
              maxLength={8}
              placeholder="Digite a Placa"
              widthValue={100}
              validacao={resultado}
              obrigatorio={true}
              inputVazio={validaInput}
            />
          </div>
          <div className="mb-3">
            <Validacao validacao={resultado} />
          </div>

          <div>
            <Botao onClick={validaPlaca} name={`Enviar`} width="16" />
          </div>
        </div>

        <div className=" flex flex-col w-full max-w-70 mt-4.5 ">
          <Accordion
            disabled={naoExibir}
            textInfos={retornoJson}
            height="h-8"
          />
        </div>
      </div>
      <TextoLink name={"Gerar PLACA"} path={"/PagGerador/3"} />
    </>
  );
};

export default ValidadorPlaca;
