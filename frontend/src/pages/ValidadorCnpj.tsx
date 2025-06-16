import { useState } from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";
import TextoLink from "../components/Texto";
import TextoDesc from "../components/TextoDesc";

const ValidadorCnpj = () => {
  const [cpf, setCpf] = useState<string>("");

  const validaCpf = () => {
    console.log(`cpf original ${cpf}`);

    // const cpfNumber = Number(cpf);
    // console.log(typeof cpfNumber);

    function validacao() {
      //tira os digitos verificadores, faz o cálculo, adiciona no novoCpf e compara (true, false)
      const cpfParcial = cpf.slice(0, -2);
      const digito1 = criaDigito(cpfParcial);
      const digito2 = criaDigito(cpfParcial + digito1);

      const novoCpf = cpfParcial + digito1 + digito2;
      console.log(`CPF Validado: ${novoCpf}`);
      return novoCpf === cpf;
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

    let resultado = validacao();

    console.log(`CPF `, resultado == true ? `Válido` : `Inválido`);
  };

  return (
    <>
      <TextoDesc name="CNPJ" />
      <Input
        name={"CNPJ"}
        value={cpf}
        onChange={(text: string) => setCpf(text)}
        maxLength={14}
        placeholder="Digite o CNPJ"
        widthValue={25}
      />
      <Botao onClick={validaCpf} />
      <TextoLink name={"CNPJ"} path={"/PagGerador"}/>
    </>
  );
};

export default ValidadorCnpj;
