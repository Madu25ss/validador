import { useMutation } from "@tanstack/react-query";

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
      const resposta = await fetch(
        `http://localhost:3000/validaPlaca?plate=${placa}`
      );
      if (!resposta.ok) throw new Error("Erro na validação da placa");
      return resposta.json();
    },
  });
};
