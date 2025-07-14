import axios from "axios"
import 'dotenv';
import 'dotenv/config';
import { response } from "express";


async function validarCNPJ(cnpj: string) {
  const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    console.error("Erro ao consultar CNPJ:", error.response?.data || error.message);
    throw new Error("Erro na validação do CNPJ");
  }
}

export default validarCNPJ;