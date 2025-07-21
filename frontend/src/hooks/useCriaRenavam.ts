import { useMutation } from "@tanstack/react-query";



type DadosResposta = {
  dataRenavam: string;
};


export const useGeraRenavam = () => {
  return useMutation<DadosResposta, Error>({
    mutationFn: async () => {
      const resposta = await fetch(
        `http://localhost:3000/geraRENAVAM`
      );
      if (!resposta.ok) throw new Error("Erro na criação do RENAVAM");
      return resposta.json();
    },
  });
};
