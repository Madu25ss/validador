import {useState} from "react";
import Botao from "../components/Botao";
import Input from "../components/Input";


const ValidadorCpf = () => {
    const [cpf, setCpf] = useState<string>("");
    
    const validaCpf = () => {
        console.log(cpf)
        //insira aqui sua logica de cpf
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