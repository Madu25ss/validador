import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  points: string;
  state: string;
};

type DadosResposta = {
  dataCpf: string;
};

// const dadosApi = async ({ points, state }: DadosEntrada): Promise<DadosResposta> => {
//   const response = await fetch(
//     `https://api.bytools.tech/api/v1/public/geradores/cpf?points=${points}&state=${state}`
//   );
//   if (!response.ok) throw new Error("erro..");
//   return response.json();
// };

// export const useGeraCpf = () => {
//   return useMutation<DadosResposta, Error, DadosEntrada>({
//     mutationFn: dadosApi,
//   });
// };

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
