import axios from "axios";
import "dotenv";
import "dotenv/config";
import { response } from "express";

const apikeyPlaca = process.env.APIKEYBYTOOLS;

async function validarPlaca(plate: string) {
  const url = `https://api.bytools.tech/api/v1/public/validadores/placa-veiculo`;

  const headers = {
    "x-api-key": apikeyPlaca,
  };

  try {
    const response = await axios.get(url, { params: { plate }, headers });
    return response.data;
  } catch (error: any) {
    throw new Error("Erro na validação da Placa");
  }
}

export default validarPlaca;
