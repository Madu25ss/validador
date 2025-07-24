import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

type DadosEntrada = {
  points: boolean;
  state: string;
  make: string;
  year: string;
};

type DadosResposta = {
  data: {
    plate: string;
  };
};

export const useGeraPlaca = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ points, state, make, year }) => {
      const resposta = await fetch(
        `${Api_URL}/geraPlaca?points=${points}&state=${state}&make=${make}&year=${year}`
      );
      if (!resposta.ok) throw new Error("Erro na criação da Placa");
      return resposta.json();
    },
  });
};
