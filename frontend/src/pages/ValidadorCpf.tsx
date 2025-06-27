import { useState } from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";
import TextoLink from "../components/Texto";
import TextoDesc from "../components/TextoDesc";

const ValidadorCpf = () => {
  const [cpf, setCpf] = useState<string>("");
  const [dataNascimento, setDataNascimento] = useState<string>("");
  const [resultado, setResultado] = useState<boolean | undefined>(undefined);

  const validaCpf = async () => {
    // console.log(`cpf original ${cpf}`);

    // const cpfNumber = Number(cpf);
    // console.log(typeof cpfNumber);

    // function validacao() {
    //   //tira os digitos verificadores, faz o cálculo, adiciona no novoCpf e compara (true, false)
    //   const cpfParcial = cpf.slice(0, -2);
    //   const digito1 = criaDigito(cpfParcial);
    //   const digito2 = criaDigito(cpfParcial + digito1);

    //   const novoCpf = cpfParcial + digito1 + digito2;
    //   // console.log(`CPF Validado: ${novoCpf}`);
    //   return novoCpf === cpf;
    // }

    // function criaDigito(cpfParcial: any) {
    //   const cpfArray = Array.from(cpfParcial);
    //   let regressivo = cpfArray.length + 1;

    //   let total = cpfArray.reduce((ac: number, val) => {
    //     ac += regressivo * Number(val);
    //     regressivo--;
    //     return ac;
    //   }, 0);

    //   let digito = 11 - (total % 11);
    //   digito > 9 ? (digito = 0) : digito;
    //   return String(digito);
    // }

    // setResultado(validacao());

    // console.log(`CPF `, resultado == true ? `Válido` : `Inválido`);

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
    // se nascimento = null, faz lógica só de validação 

    const dados = await resposta.json();
    // console.log(dados.data.name, dados.data.cpfNumber, dados.data.birthDate, dados.data.situation);
    //esse json.stringify precisa virar uma const pra ter os valores passados para o componente
    console.log(JSON.stringify({
      "Nome": dados.data.name,
      "CPF": dados.data.cpfNumber,
      "Data de Nascimento": dados.data.birthDate,
      "Situação do Cadastro": dados.data.situation,
    }))

    const sucesso = dados.sucess;

    function validaSucesso(varSucesso: boolean) {
      return varSucesso ? true: false;
    }

    setResultado(validaSucesso(sucesso));


    // console.log(`resultado setResultado: ${setResultado}`);
    // console.log(`resultado dados.sucess: ${dados.sucess}`);
    // console.log(`resultado tipo sucesso: ${typeof sucesso}`);

  };

  

  return (
    <>
      <TextoDesc name="CPF" />
      <Input
        name={"CPF"}
        value={cpf}
        onChange={(text: string) => setCpf(text)}
        maxLength={11} //sem máscara
        placeholder="Digite o CPF"
        widthValue={20}
        validacao={resultado}
      />

      <Input
        name={"Data  de Nascimento"}
        value={dataNascimento}
        onChange={(text: string) => setDataNascimento(text)}
        maxLength={8} // 8 sem a máscara
        placeholder="DD/MM/YYYY"
        widthValue={20}
        validacao={resultado}
      />
    {/* componente de validação deve ficar em cima do botão de enviar e deve ser uma  */}



      <Botao onClick={validaCpf} />
      <TextoLink name={"CPF"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorCpf;
