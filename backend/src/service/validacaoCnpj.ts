import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apiKeyToolsCnpj = process.env.APIKEYBYTOOLS;

export async function validarCNPJ(cnpj: string) {
  const url = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

  const response = await axios.get(url);
  return response.data;
}

//Para validação de um cnpj que não retorne dados. Se a function validarCNPJ não funcionar, essa valida e retorna se o cnpj é válido no cálculo ou não
export async function validarCNPJsimples(number: string) {
  const url = `https://api.bytools.tech/api/v1/public/validadores/cnpj`;

  const headers = {
    "X-API-KEY": apiKeyToolsCnpj,
  };

  const response = await axios.get(url, { params: { number }, headers });
  return response.data;
}

export async function geraCnpj(points: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cnpj`;

  const headers = {
    "X-API-KEY": apiKeyToolsCnpj,
  };

  const response = await axios.get(url, { params: { points }, headers });
  return response.data;
}
