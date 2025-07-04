
import { useMutation } from "../../node_modules/@tanstack/react-query";

const api_url = "http://localhost:3000/validarCPF";

type DadosEnviados = {
  cpf: string;
  dataNascimento: string;
}

const postData = async ({cpf, dataNascimento}: DadosEnviados): Promise<any> => {
  const resposta = await fetch(api_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cpf: cpf,
      nascimento: dataNascimento,
    }),
  });

  const dados = await resposta.json();
  return dados;
};

export function useApiCpf() {
  const mutation = useMutation({
    mutationFn: postData,
    onSuccess: (data) => {
      console.log(`post pelo tanstack funcionando, ${data}`)
    },
  });

  return mutation;
}
