import { useMutation } from "@tanstack/react-query";

const Api_URL = import.meta.env.VITE_Api_URL;

type DadosEntrada = {
  placa: string;
};

type DadosResposta = {
  data: {
    valid: boolean;
    value: string;
  };
};

export const useValidaPlaca = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ placa }) => {
      const resposta = await fetch(`${Api_URL}/validaPlaca?plate=${placa}`);
      if (!resposta.ok) throw new Error("Erro na validação da placa");
      return resposta.json();
    },
  });
};
