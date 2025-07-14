import { useMutation } from "@tanstack/react-query";

type DadosEntrada = {
  cnpj: string;
};

// razaoSocial: resultado.data.razao_social,
// nomeFantasia: resultado.data.nome_fantasia,
// naturezaJuridica: resultado.data.natureza_juridica,
// descricaoSituacaoCadastral: resultado.data.descricao_situacao_cadastral,

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
      const resposta = await fetch(`http://localhost:3000/validaCNPJ/${cnpj}`);
      if (!resposta.ok) throw new Error("Erro na validação do CNPJ");
      return resposta.json();
    },
  });
};
