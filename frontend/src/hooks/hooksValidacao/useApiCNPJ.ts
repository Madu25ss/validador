import { useMutation } from "@tanstack/react-query";


type DadosEntrada = {
  cnpj: string;
};

type DadosResposta = {
  success?: boolean;
  data: {
    razaoSocial?: string;
    nomeFantasia?: string;
    naturezaJuridica?: string;
    descricaoSituacaoCadastral?: string;
    valid?: boolean;
    value?: string;
  };
};


export const useValidaCnpj = () => {
  return useMutation<DadosResposta, Error, DadosEntrada>({
    mutationFn: async ({ cnpj }) => {
      cnpj = cnpj.replace(/[^\d]+/g, "");

      let resposta = await fetch(`http://localhost:3000/validaCNPJ/${cnpj}`);

      //Se o cnpj não for verdadeiro (retornando dados verdadeiros), é feita a segunda validação, verificando se o cálculo dos dígitos é válido ou não.
      if (!resposta.ok) {
        resposta = await fetch(
          `http://localhost:3000/validaCNPJsimples?cnpj=${cnpj}`
        );
      }
      return resposta.json();
    },
  });
};
