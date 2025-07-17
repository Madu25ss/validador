import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyCpf = process.env.APIKEYCPF;
const apiKeyTools = process.env.APIKEYBYTOOLS;

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

export async function geraCpf(points:string, state:string) {
  const url = "";

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": apiKeyTools,
  };

  const response = await axios.get(url)
}
