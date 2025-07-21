import axios from "axios";
import "dotenv/config";
import { response } from "express";

 const apiKeyToolsCpf = process.env.APIKEYBYTOOLS;

async function geraCpf(points: string, state: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cpf`;

  const headers = {
    "X-API-KEY": apiKeyToolsCpf,
  };

  try {
    const response = await axios.get(url, { params: {points, state}, headers},);
    return response.data;
  } catch (error: any) {
    console.log("Erro completo:", error.response?.data || error.message);
    console.log("API Key:", apiKeyToolsCpf);
    throw new Error("Erro ao gerar CPF");
  }
}

export default geraCpf;
