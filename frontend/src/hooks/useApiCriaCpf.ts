
import { useQuery } from "@tanstack/react-query";
const api_url = "http://localhost:3000/validarCPF";

type DadosEntrada = {
  cpf: string;
  nascimento: string;
};

type DadosResposta = {
  success: boolean;
  data: {
    nome: string;
    nascimento: string;
    cpf: string;
    situacao: string;
  };
};

// export const useValidaCpf = () => {
//   return useMutation<DadosResposta, Error, DadosEntrada>({
//     mutationFn: async ({ cpf, nascimento }) => {
//       const resposta = await fetch(api_url, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           cpf: cpf,
//           nascimento: nascimento,
//         }),
//       });
//       return resposta.json();
//     },
//   });
// };

/////user esse para get
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const API_CALCADOS = '/getCalcados.php';

// const fetchCalcados = async () => {
//  const response = await axios.get(API_CALCADOS);
//  return response.data;
// }

// export function useCalcadoData(){
//  const query = useQuery({
//  queryFn: fetchCalcados,
//  queryKey: ['calcados-data']
//  });

//  return query;
// }