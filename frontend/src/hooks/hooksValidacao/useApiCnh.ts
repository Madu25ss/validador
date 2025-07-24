import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

type DadosEntrada = {
  cnh: string;
};

type DadosResposta = {
  success: boolean;
  valid: boolean;
};

export const useValidaCnh = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ cnh }) => {
      const resposta = await fetch(`${Api_URL}/validaCNH?number=${cnh}`);
      if (!resposta.ok) throw new Error("Erro na validação do CNH");
      return resposta.json();
    },
  });
};
