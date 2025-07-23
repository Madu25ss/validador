
import { useMutation } from "@tanstack/react-query";
const api_url = "http://localhost:3000/validarCPF";

type DadosEntrada = {
  cpf: string;
  nascimento: string;
};

type DadosResposta = {
  success: boolean;
  data: {
    nome: string;
    nascimento: string;
    cpf: string;
    situacao: string;
  };
};

export const useValidaCpf = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ cpf, nascimento }) => {
      const resposta = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf: cpf,
          nascimento: nascimento,
        }),
      });
      return resposta.json();
    },
  });
};
