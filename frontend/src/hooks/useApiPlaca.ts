import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  plate: string;
};

type DadosResposta = {
  success: boolean;
  data: {
    valid: boolean;
    value: string;
  };
};

export const useValidaPlaca = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ plate }) => {
      const resposta = await fetch(
        `http://localhost:3000/validaPlaca?plate=${plate}`
      );
      if (!resposta.ok) throw new Error("Erro na validação da placa");
      return resposta.json();
    },
  });
};
