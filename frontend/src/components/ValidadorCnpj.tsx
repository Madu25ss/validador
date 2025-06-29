import { useState } from "react";
import Botao from "./Botao";
import Input from "./Input";
import TextoLink from "./Texto";
import TextoDesc from "./TextoDesc";

const ValidadorCnpj = () => {
  const [cnpj, setCnpj] = useState<string>("");
  const [resultado, setResultado] = useState<boolean | undefined>(undefined);

  const validaCnpj = () => {
    console.log(`cpf original ${cnpj}`);
    let sucesso;

    // const cpfNumber = Number(cpf);
    // console.log(typeof cpfNumber);

    //tira os digitos verificadores, faz o cálculo, adiciona no novoCpf e compara (true, false)
    // const cnpjParcial = cnpj.slice(0, 12);
    // console.log(cnpjParcial);
    // const digito1 = criaDigito(cnpjParcial, [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    // const digito2 = criaDigito(cnpjParcial + digito1, [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]);
    // console.log(digito1, digito2);

    // const novoCnpj = cnpjParcial + digito1 + digito2;
    // console.log(`CNPJ Validado: ${novoCnpj}`);
    // return novoCnpj === cnpj;

    if (cnpj == null || cnpj == undefined || cnpj == "") {
      sucesso = false;
    } else {
      sucesso = true;
    }

    function validaSucesso(varSucesso: boolean) {
      if ((varSucesso = true)) {
        varSucesso;
      } else {
        varSucesso = false;
      }
      return varSucesso;
    }

    // function criaDigito(cnpjParcial: any, pesos: number[]) {
    //   const cnpjArray = Array.from(cnpjParcial).map(Number);

    //   let total = cnpjArray.reduce((ac: number, num, i) => {
    //     return ac + num * pesos[i];
    //   }, 0);

    //   const resto = total % 11;
    //   const digito = resto < 2 ? 0 : 11 - resto;
    //   return String(digito);
    // }

    setResultado(validaSucesso(sucesso));

    // console.log(`CNPJ `, resultado == true ? `Válido` : `Inválido`);
  };

  return (
    <>
      <TextoDesc name="CNPJ" />
      <Input
        name={"CNPJ"}
        value={cnpj}
        onChange={(text: string) => setCnpj(text)}
        maxLength={14}
        placeholder="Digite o CNPJ"
        widthValue={25}
        validacao={resultado}
        obrigatorio={true}
      />
      <Botao onClick={validaCnpj} />
      <TextoLink name={"CNPJ"} path={"/PagGerador"} />
    </>
  );
};

export default ValidadorCnpj;
