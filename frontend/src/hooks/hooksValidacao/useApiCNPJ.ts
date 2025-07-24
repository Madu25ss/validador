import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  cnpj: string;
};

type DadosResposta = {
  success: boolean;
  data: {
    razaoSocial: string;
    nomeFantasia: string;
    naturezaJuridica: string;
    descricaoSituacaoCadastral: string;
  };
};

export const useValidaCnpj = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ cnpj }) => {
      cnpj = cnpj.replace(/[^\d]+/g, "");

      const resposta = await fetch(`http://localhost:3000/validaCNPJ/${cnpj}`);
      if (!resposta.ok) throw new Error("Erro na validação do CNPJ");
      return resposta.json();
    },
  });
};
