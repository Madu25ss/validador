import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

type DadosEntrada = {
  points: string;
  state: string;
};

type DadosResposta = {
  dataCpf: string;
};

export const useGeraCpf = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points, state }) => {
      const resposta = await fetch(
        `${Api_URL}/geraCPF?points=${points}&state=${state}`
      );
      if (!resposta.ok) throw new Error("Erro na criação do CPF");
      return resposta.json();
    },
  });
};
