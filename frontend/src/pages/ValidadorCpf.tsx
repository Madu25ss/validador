import {useState} from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";


const ValidadorCpf = () => {
    const [cpf, setCpf] = useState<string>("");
    
    const validaCpf = () => {
        console.log(`cpf original ${cpf}`);
        
        // const cpfNumber = Number(cpf);
        // console.log(typeof cpfNumber);

        function validacao() {
            //tira os digitos verificadores, faz o cálculo, adiciona no novoCpf e compara (true, false)
            const cpfParcial = cpf.slice(0,-2);
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
                ac += (regressivo * Number(val));
                regressivo--;
                return ac;
            }, 0);

            let digito = 11 - (total % 11);
            digito > 9? digito = 0 : digito;
            return String(digito);
        };

        let resultado = validacao();
        
        console.log(`CPF `, resultado == true? `Válido` : `Inválido`);
    }
    

return (
    <div className="flex flex-col bg-stone-200 h-screen px-24 py-8">
        <h1 className="mt-8 text-3xl font-light text-center">Validador CPF</h1>
        <h2 className="mt-12 text-lg font-medium">Digite um CPF e clique em "Validar CPF" para verificar se ele é válido ou falso</h2>
        <main>
            <Input name={"cpf"} value={cpf} onChange={(text: string)=> setCpf(text)} maxLength={11}/>
            <Botao onClick={validaCpf}/>
            {/* <Componente_input/>
            <Componente_validacao/> */}
        </main>
    </div>
    );
}

export default ValidadorCpf;