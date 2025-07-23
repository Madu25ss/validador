import { useMutation } from "@tanstack/react-query";

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
        `http://localhost:3000/geraCPF?points=${points}&state=${state}`
      );
      if (!resposta.ok) throw new Error("Erro na criação do CPF");
      return resposta.json();
    },
  });
};
