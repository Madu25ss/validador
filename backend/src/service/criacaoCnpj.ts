import axios from "axios";
import "dotenv/config";
import { response } from "express";

 const apiKeyToolsCnpj = process.env.APIKEYBYTOOLS;

async function geraCnpj(points: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cnpj`;

  const headers = {
    "X-API-KEY": apiKeyToolsCnpj,
  };

  try {
    const response = await axios.get(url, { params: {points}, headers},);
    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao gerar CNPJ");
  }
}

export default geraCnpj;
