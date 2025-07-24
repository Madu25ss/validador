import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

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
      const resposta = await fetch(`${Api_URL}/validarCPF`, {
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
