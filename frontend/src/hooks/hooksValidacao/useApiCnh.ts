import { useMutation } from "@tanstack/react-query";

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
      const resposta = await fetch(`http://localhost:3000/validaCNH?number=${cnh}`);
      if (!resposta.ok) throw new Error("Erro na validação do CNH");
      return resposta.json();
    },
  });
};
