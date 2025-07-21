import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  points: string;
};

type DadosResposta = {
  dataCnpj: string;
};


export const useGeraCnpj = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points}) => {
      const resposta = await fetch(
        `http://localhost:3000/geraCNPJ?points=${points}`
      );
      if (!resposta.ok) throw new Error("Erro na criação do CNPJ");
      return resposta.json();
    },
  });
};
