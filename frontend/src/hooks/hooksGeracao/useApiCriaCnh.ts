import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL ;

type DadosEntrada = {
  points: string;
  allInformation: string;
};

type DadosResposta = {
  dataCnh: string;
};

export const useGeraCnh = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points, allInformation }) => {
      const resposta = await fetch(
        `${Api_URL}/geraCNH?points=${points}&allInformation=${allInformation}`
      );
      if (!resposta.ok) throw new Error("Erro na criação do CNH");
      return resposta.json();
    },
  });
};
