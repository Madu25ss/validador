import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyCpf = process.env.APIKEYCPF;
const apiKeyCpfTools = process.env.APIKEYBYTOOLS;

export async function validarCPF(cpf: string, nascimento?: string) {
  const url = "https://api.cpfhub.io/api/cpf";

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apikeyCpf,
  };

  const body = {
    cpf,
    birthDate: nascimento,
  };

  const response = await axios.post(url, body, { headers });
  return response.data;
}


export async function geraCpf(points: string, state: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cpf`;

  const headers = {
    "X-API-KEY": apiKeyCpfTools,
  };

  const response = await axios.get(url, { params: {points, state}, headers},);
  return response.data;
}


