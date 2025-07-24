import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

type DadosEntrada = {
  points: string;
};

type DadosResposta = {
  dataCnpj: string;
};

export const useGeraCnpj = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points }) => {
      const resposta = await fetch(`${Api_URL}/geraCNPJ?points=${points}`);
      if (!resposta.ok) throw new Error("Erro na criação do CNPJ");
      return resposta.json();
    },
  });
};
