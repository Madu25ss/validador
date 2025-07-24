import Botao from "../Botao";
import Input from "../Input";
import TextoLink from "../Texto";
import TextoDesc from "../TextoDesc";
import Validacao from "../Validacao";
import Accordion from "../Accordion";
import { useHooksStore } from "../../store/storeHooks";
import { useValidaCnpj } from "../../hooks/hooksValidacao/useApiCNPJ";


const ValidadorCnpj = () => {
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
  } = useHooksStore();

  const { mutate } = useValidaCnpj();

  const validaCnpj = () => {
    SetNaoExibir(true);
    if (!cnpj) {
      setValidaInput(false);
      setResultado(false);
      SetNaoExibir(true);
    } else {
      {
        mutate(
          { cnpj },
          {
            onSuccess: (dados) => {
              let geraJson = [
                `Razão Social: ${dados.data.razaoSocial} \n`,
                `Nome Fantasia: ${dados.data.nomeFantasia} \n`,
                `Natureza Jurídica: ${dados.data.naturezaJuridica} \n`,
                `Situação Cadastral: ${dados.data.descricaoSituacaoCadastral} \n`,
              ];

              if (dados.data.descricaoSituacaoCadastral === undefined) {
                geraJson = [];
                setRetornoJson(geraJson);
                SetNaoExibir(true);
              } else {
                SetNaoExibir(false);
                setRetornoJson(geraJson);
              }

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
      setValidaInput(true);
    }
  };

  return (
    <>
      <TextoDesc
        text={`Digite o CNPJ e clique em "Enviar" para verificar se ele é Válido ou Inválido.`}
      />
      <div className="flex flex-row space-x-10 w-full mb-1 ">
        <div className="flex flex-col w-60 h-auto justify-items-start">
          <div className="flex flex-col w-60 space-y-10 h-auto justify-items-start mb-2">
            <Input
              name={"CNPJ"}
              value={cnpj}
              onChange={(text: string) => setCnpj(text)}
              maxLength={18} 
              placeholder="Digite o CNPJ"
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
            <Botao onClick={validaCnpj} name={`Enviar`} />
          </div>
        </div>

        <div className=" flex flex-col w-full max-w-70 mt-4.5 ">
          <Accordion disabled={naoExibir} textInfos={retornoJson} height="h-8"/>
        </div>
      </div>
      <TextoLink name={"Gerar CNPJ"} path={"/PagGerador/1"} />
    </>
  );
};

export default ValidadorCnpj;
