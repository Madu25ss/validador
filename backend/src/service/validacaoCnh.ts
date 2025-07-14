import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyCnh = process.env.APIKEYBYTOOLS;

async function validarCNH(number: string) {
  const url = `https://api.bytools.tech/api/v1/public/validadores/cnh`;

  const headers = {
    "x-api-key": apikeyCnh,
  };

  try {
    const response = await axios.get(url,{params: {number}, headers});
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro ao consultar CNH:",
      error.response?.data || error.message
    );
    throw new Error("Erro na validação do CNH");
  }
}

export default validarCNH;
