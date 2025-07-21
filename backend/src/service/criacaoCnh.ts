import axios from "axios";
import "dotenv/config";
import { response } from "express";

 const apiKeyToolsCnh = process.env.APIKEYBYTOOLS;

async function geraCnh(points: string, allInformation: string) {
  const url = `https://api.bytools.tech/api/v1/public/geradores/cnh`;

  const headers = {
    "X-API-KEY": apiKeyToolsCnh,
  };

  try {
    const response = await axios.get(url, { params: {points, allInformation}, headers},);
    return response.data;
  } catch (error: any) {
    throw new Error("Erro ao gerar CNH");
  }
}

export default geraCnh;
