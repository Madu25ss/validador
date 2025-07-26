import Botao from "../Botao";
import Input from "../Input";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Validacao from "../Validacao";
import { useValidaCnh } from "../../hooks/hooksValidacao/useApiCnh";
import { useHooksStore } from "../../store/storeHooks";

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
    setCarregando,
  } = useHooksStore();

  const { mutate } = useValidaCnh();

  const validaCnh = () => {
    if (!cnh) {
      setValidaInput(false);
      setResultado(false);
    } else {
      setValidaInput(true);
      setCarregando(true);
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
        text={`Digite o CNH e clique em "Enviar" para verificar se ele é Válido ou Inválido.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start">
            <Input
              name={"CNH"}
              value={cnh}
              onChange={(text: string) => setCnh(text)}
              maxLength={14}
              placeholder="Digite o CNH"
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
            <Botao onClick={validaCnh} name={`Enviar`} width="16" />
            <TextoLink name={"Gerar CNH"} path={"/PagGerador/2"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidadorCnh;
