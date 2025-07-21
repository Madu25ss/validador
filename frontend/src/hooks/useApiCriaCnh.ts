import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  points: string;
  allInformation: string;
};

type DadosResposta = {
  dataCnh: string;
};


export const useGeraCnh = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points, allInformation}) => {
      const resposta = await fetch(
        `http://localhost:3000/geraCNH?points=${points}&allInformation=${allInformation}`
      );
      if (!resposta.ok) throw new Error("Erro na criação do CNH");
      return resposta.json();
    },
  });
};
