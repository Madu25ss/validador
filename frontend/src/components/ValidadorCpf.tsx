import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";
import Validacao from "./Validacao";



const ValidadorCpf = () => {
  const [cpf, setCpf] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [resultado, setResultado] = useState<boolean | undefined>(undefined);
  const [validaInput, setValidaInput] = useState<boolean | undefined>(
    undefined
  );

  const [identificacaoJson, setIdentificacaoJson] = useState<string>("");



  const validaCpf = async () => {

    let sucesso;

    function ValidaInputFunc(cpf: string) {
      if (!cpf) {
        return false;
      } else {
        return true;
      }
    }

    setValidaInput(ValidaInputFunc(cpf));

    if (!dataNascimento) {
      function validacao() {

        function isSequencia(cpfNumero: string) {
          if (validaInput == true && cpfNumero != undefined) {
            const sequencia = cpfNumero[0].repeat(cpfNumero.length);
            return sequencia === cpfNumero;
          } else {
            return true;
          }
        }

        const sequenciaCpf = isSequencia(cpf);
      

        if (sequenciaCpf == true) {
          sucesso = false;
        } else {
          const cpfParcial = cpf.slice(0, -2);
          const digito1 = criaDigito(cpfParcial);
          const digito2 = criaDigito(cpfParcial + digito1);

          const novoCpf = cpfParcial + digito1 + digito2;
        
          return novoCpf === cpf;
        }
      }

      function criaDigito(cpfParcial: any) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;

        let total = cpfArray.reduce((ac: number, val) => {
          ac += regressivo * Number(val);
          regressivo--;
          return ac;
        }, 0);

        let digito = 11 - (total % 11);
        digito > 9 ? (digito = 0) : digito;
        return String(digito);
      }

      sucesso = validacao();
    }

    const resposta = await fetch("http://localhost:3000/validarCPF", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cpf: cpf,
        nascimento: dataNascimento,
      }),
    });  

    const dados = await resposta.json();
  
    if (resposta.status == 200) {
      sucesso = dados.sucess;

      setIdentificacaoJson(dados.data.cpf);

    }

    function validaSucesso(varSucesso: boolean) {
      if (varSucesso == true) {
        varSucesso;
      } else {
        varSucesso = false;
      }
      return varSucesso;
    }

    setResultado(validaSucesso(sucesso));

    console.log(`resultado setResultado: ${resultado}`);
    console.log(`resultado dados.sucess: ${dados.sucess}`);
    console.log(`resultado tipo sucesso: ${typeof sucesso}`);
    console.log(`resultado sucesso: ${sucesso}`);
    console.log(`resultado dados: ${dados}`);
    console.log(`resultado validaInput: ${validaInput}`);
    console.log(dados.data.nome)
  };

  return (
    <>
      <TextoDesc name="CPF" />
      <div className="flex flex-row space-x-7 w-full h-auto mb-2">
        <div className="flex flex-col w-60 h-auto space-y-6 border border-amber-500">
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
            onChange={(text: string) => setDataNascimento(text)}
            maxLength={8} // 8 sem a máscara
            placeholder="DD/MM/YYYY"
            widthValue={100}
          />
        </div>

        <div className="border border-amber-700 flex flex-col w-60">
          {/* <Accordion 
          identificacao={identificacaoJson}
          /> */}
        </div>
      </div>


      <Validacao validacao={resultado} />

      <Botao onClick={validaCpf} />
      <TextoLink name={"CPF"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorCpf;
